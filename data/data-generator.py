import json
import math
import re
import shelve
from itertools import islice

import requests
from google.oauth2 import service_account
from google.cloud import vision

from europeana import Europeana
from google_vision import GoogleVision
import data_transformation as transformation

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

for item in search.generic_query_generator('qf=DATA_PROVIDER%3A"Malmö+museer"&query=modeplansch'):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in search.generic_query_generator('qf=DATA_PROVIDER%3A"Etnografiska museet"&query=who%3A(Harlin%2C+Alf+%3F)'):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in search.generic_query_generator('query=f%C3%B6rpackning%20NOT%20photographs%20NOT%20524%20NOT%20metall%20NOT%20m%C3%A4ssing&qf=DATA_PROVIDER%3A%22Stiftelsen%20Nordiska%20museet%22&qf=DATA_PROVIDER%3A%22Nationalmuseum%2C%20Sweden%22&qf=DATA_PROVIDER%3A%22Etnografiska%20museet%22&qf=DATA_PROVIDER%3A%22Malm%C3%B6%20museer%22&thumbnail=true&media=true'):
    unprocessed_items.append(ItemStorage('none', 'none', item))

for item in search.generic_query_generator('query=291%20NOT%20photographs%20NOT%20oddner&qf=DATA_PROVIDER%3A%22Malm%C3%B6%20museer%22&reusability=open&thumbnail=true&media=true'):
    unprocessed_items.append(ItemStorage('none', 'none', item))

result = list()
indexed_ids = list() # to avoid duplicates
for item in unprocessed_items:
    if item.item['id'] in indexed_ids:
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

    output['application']['garment'] = item.type
    output['application']['colors'] = vision.get_colors(output['edm_preview'])

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