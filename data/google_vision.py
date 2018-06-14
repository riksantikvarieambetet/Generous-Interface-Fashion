from google.oauth2 import service_account
from google.cloud import vision

from colour import Color

class GoogleVision:
    def __init__(self, service_account_file):
        credentials = service_account.Credentials.from_service_account_file(service_account_file)
        self.client = vision.ImageAnnotatorClient(credentials=credentials)

    def get_colors(self, url):
        colors = []
        response = self.client.image_properties({
            'source': { 'image_uri': url }
        })

        for rank in response.image_properties_annotation.dominant_colors.colors:
            if rank.score < 0.01:
                continue

            c = {}
            c['score'] = rank.score
            color = Color(rank.color.red, rank.color.green, rank.color.blue)
            c['hsl'] = color.hsl

            colors.append(c)

        return colors
