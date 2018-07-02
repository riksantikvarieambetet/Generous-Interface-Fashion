import math
import requests

class Europeana:
    def __init__(self, key):
        self.key = key

    def provider_subject_generator(self, provider, subject):
        items = self.generic_query_generator('query=what:"{0}"&qf=DATA_PROVIDER:"{1}"&thumbnail=true&media=true'.format(subject, provider))
        for item in items:
            yield item

    def generic_query_generator(self, query):
        start_query = 'https://www.europeana.eu/api/v2/search.json?wskey={0}&{1}&rows=1'.format(self.key, query)
        r = requests.get(start_query)
        data = r.json()
        required_n_requests = math.ceil(data['totalResults'] / 100)

        query = 'https://www.europeana.eu/api/v2/search.json?wskey={0}&{1}&rows=100'.format(self.key, query)
        count = 0
        while required_n_requests > count:
            start_record = count * 100
            count += 1

            # europeana specific hack
            if start_record == 0:
                start_record = 1

            r = requests.get(query + '&start=' + str(start_record))
            data = r.json()
            for item in data['items']:
                yield item
