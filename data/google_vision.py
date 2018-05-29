from google.oauth2 import service_account
from google.cloud import vision

from data_transformation import rgb2hex

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
            c['hex'] = rgb2hex(rank.color.red, rank.color.green, rank.color.blue)

            colors.append(c)

        return colors
