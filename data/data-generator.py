import json
import math
import re
from itertools import islice

import requests

from europeana import Europeana
import data_transformation as transformation

class ItemStorage():
    def __init__(self, item_type, provider, item):
        self.item = item
        self.provider = provider
        self.type = item_type

print('What\'s your Europeana API key?')
search = Europeana(input())

unprocessed_items = list()
for item in islice(search.provider_subject_generator('Stiftelsen Nordiska museet', 'Dräkt : Byxor'), 60):
    unprocessed_items.append(ItemStorage('byxor', 'Stiftelsen Nordiska museet', item))

for item in  islice(search.provider_subject_generator('Stiftelsen Nordiska museet', 'Dräkt : Strumpor'), 95):
    unprocessed_items.append(ItemStorage('strumpor', 'Stiftelsen Nordiska museet',item))

result = list()
for item in unprocessed_items:
    #TODO update data model
    #TODO clean and create application description
    output = {}
    output['application'] = {}

    output['europeana_record'] = item.item['id']
    output['dc_title'] = item.item['title'][0]
    output['edm_data_provider'] = item.provider
    output['edm_rights'] = item.item['rights'][0]
    output['edm_is_shown_at'] = item.item['edmIsShownAt'][0]
    output['dc_description'] = ''
    output['edm_preview'] = item.item['edmPreview'][0]
    if 'dcDescription' in item.item:
        output['dc_description'] = item.item['dcDescription'][0]

    output['application']['garment'] = item.type

    application_description = transformation.get_shortified_description(output['dc_description'])
    if application_description == '':
        application_description = output['dc_title']
    else:
        application_description = transformation.enchant_description_with_title(application_description, output['dc_title'])


    output['application']['description'] = application_description

    result.append(output)

with open('data.json', 'w') as outfile:
    json.dump(result, outfile)
