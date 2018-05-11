import json
import math
import re

import requests

print('What\'s your Europeana API key?')
api_key = input()

# Dräkt : Byxor
print('What are we fetching?')
what = input()

# Stiftelsen Nordiska museet
print('From who are we fetching?')
provider = input()

print('What would we call the items?')
application_what = input()

def europeana_generator():
    europeana_start_query = 'https://www.europeana.eu/api/v2/search.json?wskey={0}&query=what:"{1}"&qf=DATA_PROVIDER:"{2}"&thumbnail=true&media=true&rows=1'.format(api_key, what, provider)
    r = requests.get(europeana_start_query)
    data = r.json()
    required_n_requests = math.ceil(data['totalResults'] / 100)

    europeana_query = 'https://www.europeana.eu/api/v2/search.json?wskey={0}&query=what:"{1}"&qf=DATA_PROVIDER:"{2}"&thumbnail=true&media=true&rows=100'.format(api_key, what, provider)
    count = 0
    while required_n_requests > count:
        start_record = count * 100
        count += 1

        # europeana hack
        if start_record == 0:
            start_record = 1

        r = requests.get(europeana_query + '&start=' + str(start_record))
        data = r.json()
        for item in data['items']:
            yield item

result = list()
for item in europeana_generator():
    #TODO update data model
    #TODO clean and create application description
    output = {}
    output['application'] = {}

    edm_id = re.search(r'^\/(\d+)\/', item['id'])

    output['europeana_record'] = int(edm_id.group(1))
    output['dc_title'] = item['title'][0]
    output['edm_data_provider'] = provider
    output['edm_rights'] = item['rights'][0]
    output['edm_is_shown_at'] = item['edmIsShownAt'][0]
    output['dc_description'] = ''
    output['edm_preview'] = item['edmPreview'][0]
    if 'dcDescription' in item:
        output['dc_description'] = item['dcDescription'][0]

    output['application']['garment'] = application_what

    result.append(output)

with open('data_{0}.json'.format(application_what), 'w') as outfile:
    json.dump(result, outfile)
