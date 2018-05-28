from typing import Union
from itertools import filterfalse
import re

def get_license_from_uri(uri: str) -> Union[object, bool]:
    raise NotImplementedError

def get_shortified_description(desc: str) -> str:
    def too_short(sentence: str) -> bool:
        return True if len(sentence) < 45 else False

    def too_long(sentence: str) -> bool:
        return True if len(sentence) > 160 else False

    def does_start_with_slash(para: str) -> bool:
        return True if para.startswith('/') else False

    def is_list_item(sentence: str) -> bool:
        regex = re.compile(r'^\w\)|^\d\)')
        return True if re.match(regex, sentence) else False

    pragraphs = desc.split('\n')
    pragraphs = filterfalse(does_start_with_slash, pragraphs)

    for pragraph in pragraphs:
        sentences = pragraph.split('. ')
        sentences = filterfalse(too_short, sentences)
        sentences = filterfalse(too_long, sentences)
        sentences = filterfalse(is_list_item, sentences)
        for sentence in sentences:
            if sentence:
                if not sentence.endswith('.'):
                    sentence = sentence + '.'

                return sentence

    #TODO how to deal with fails?
    return ''


def enchant_description_with_title(desc: str, title: str) -> str:
    common_non_basic_form_sufixes = ('or', 'ar', 'er', 'en', 'an')

    core_title = title
    if title.endswith(common_non_basic_form_sufixes):
        core_title = core_title[:-2]

    if core_title in desc:
        return desc

    return '{0}: {1}'.format(title, desc)
