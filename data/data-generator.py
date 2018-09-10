import json
import math
import re
import shelve
from itertools import islice

import requests
from google.oauth2 import service_account
from google.cloud import vision

from dataskakare import Europeana
from dataskakare import GoogleVision
import dataskakare.data_transformation as transformation

from colorsnap.palettes import CSS_3
from colorsnap import snap_color

class ItemStorage():
    def __init__(self, item_type, provider, item):
        self.item = item
        self.provider = provider
        self.type = item_type

cache = shelve.open('credentials_cache')

if 'europeana_public_key' in cache:
    search = cache['europeana_public_key']
else:
    print('What\'s your Europeana API key?')
    search = Europeana(input())
    cache['europeana_public_key'] = search

if 'gsa_file' in cache:
    vision = cache['gsa_file']
else:
    print('What\'s the absolute path to your Google service account file?')
    vision = input()
    cache['gsa_file'] = vision

vision = GoogleVision(vision)
cache.close()

print('This might take a while...')

unprocessed_items = list()

for item in islice(search.generic_query_generator('qf=DATA_PROVIDER%3A"Nationalmuseum%2C+Sweden"&query=%28paintings+AND+%28bröstbild+OR+porträtt%29%29+OR+dräkt+OR+mode+OR+textil+OR+smycke&reusability=open&thumbnail=true'), 1000):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in islice(search.generic_query_generator('qf=DATA_PROVIDER%3A"Världskulturmuseet"&query=dräkt+OR+textil+OR+smycke'), 1000):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in islice(search.generic_query_generator('qf=costume&query=europeana_collectionName%3A(2048211_Ag_EU_EuropeanaFashion_1019)'), 1000):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in islice(search.generic_query_generator('qf=DATA_PROVIDER%3A"Världskulturmuseet"&qf=DATA_PROVIDER%3A"Östasiatiska+museet"&qf=DATA_PROVIDER%3A"Etnografiska+museet"&query=%28%28kimono+OR+träsnitt+OR+inro+OR+netsuke+OR+solfjäder+OR+docka%29+AND+japan%29&thumbnail=true'), 1000):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in islice(search.generic_query_generator('query=NOT+oddner+AND+%28dräkt+OR+mode+OR+kläder+OR+textil+OR+smycke%29&qf=DATA_PROVIDER%3A"Malmö%20museer"&reusability=open&reusability=restricted&thumbnail=true'), 1000):
    unprocessed_items.append(ItemStorage('none', 'none', item))

result = list()
indexed_ids = list() # to avoid duplicates
for item in unprocessed_items:
    if item.item['id'] in indexed_ids:
        continue

    if item.item['rights'][0] == 'http://rightsstatements.org/vocab/InC/1.0/':
        continue

    output = {}
    output['application'] = {}

    output['europeana_record'] = item.item['id']
    output['dc_title'] = item.item['title'][0]
    output['edm_data_provider'] = item.item['dataProvider'][0]
    output['edm_rights'] = item.item['rights'][0]
    output['edm_is_shown_at'] = item.item['edmIsShownAt'][0]
    output['dc_description'] = ''
    output['edm_preview'] = item.item['edmPreview'][0]
    if 'dcDescription' in item.item:
        output['dc_description'] = item.item['dcDescription'][0]

    colors = vision.get_colors(output['edm_preview'])

    output['application']['css_colors'] = list()
    for color in colors:
        css_color = snap_color(CSS_3, color['hex'])[1]
        if css_color not in output['application']['css_colors']:
            output['application']['css_colors'].append(css_color)

    # if lavender and darkgrey are the only colors it's likely that this is a broken thumbnail.
    if len(output['application']['css_colors']) == 2:
        if 'darkgrey' in output['application']['css_colors'] and 'lavender' in output['application']['css_colors']:
            continue

    output['application']['labels'] = list()
    labels = vision.get_labels(output['edm_preview'])
    for label in labels:
        if label['score'] > 0.5:
            output['application']['labels'].append(label['value'])

    output['application']['labels'] = list(set(output['application']['labels']))

    # exclude documents
    if 'document' in output['application']['labels']:
        continue

    application_description = transformation.get_shortified_description(output['dc_description'])
    if application_description == '':
        application_description = output['dc_title']
    else:
        application_description = transformation.enchant_description_with_title(application_description, output['dc_title'])

    output['application']['description'] = application_description

    result.append(output)
    indexed_ids.append(item.item['id'])

with open('data.json', 'w') as outfile:
    json.dump(result, outfile)
