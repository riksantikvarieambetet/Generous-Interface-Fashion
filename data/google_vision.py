import shelve

from google.oauth2 import service_account
from google.cloud import vision

from colour import Color

class GoogleVision:
    def __init__(self, service_account_file, cache=True):
        credentials = service_account.Credentials.from_service_account_file(service_account_file)
        self.client = vision.ImageAnnotatorClient(credentials=credentials)
        self.cache = cache

    def get_colors(self, url):
        colors = []

        if self.cache:
            cache = shelve.open('google_vision_color_cache')

        if self.cache and url in cache:
            response = cache[url]
        else:
            response = self.client.image_properties({
                'source': { 'image_uri': url }
            })
            cache[url] = response

        if self.cache:
            cache.close()

        for rank in response.image_properties_annotation.dominant_colors.colors:
            if rank.score < 0.01:
                continue

            c = {}
            c['score'] = rank.score
            color = Color(rgb=((rank.color.red / 255), (rank.color.green / 255), (rank.color.blue / 255)))
            c['hsl'] = color.hsl

            colors.append(c)

        return colors
