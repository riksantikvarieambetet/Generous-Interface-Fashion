# Generous Interface Fashion
[![Build Status](https://travis-ci.org/riksantikvarieambetet/Generous-Interface-Fashion.svg?branch=master)](https://travis-ci.org/riksantikvarieambetet/Generous-Interface-Fashion)

This project was created within an evaluation of generous interfaces as a complement to common web interfaces of archives and museums often dominated by text search. This prototype is centered around images, fashion and the history of dress and costume. The intended user of the prototype is a person with deep interest in the topic and who is an active hobbyist producing her own designs or clothes. She could be a cosplayer, a reenactor, or simply someone who likes to make vintage or historical clothing. 

The project is a partnership between the National Heritage Board, the Nordic Museum, the Museums of World Cultures, the National Museum of Art, and Malmö Museums.

Note that our prototype does not currently work in Internet Explorer and we're not likely to change that. The reason being we view the prototype as being a concept prototype and demonstrator (a minimum learnable product) rather than a pre-cursor to a operational product.

## Setup

```bash
git clone https://github.com/riksantikvarieambetet/Generous-Interface-Fashion.git
```

### Web Application

Installing and running the web application:

```bash
cd app
npm install
npm run serve
```

### Fetching Data

#### Prerequisites

 - An Europeana API key
 - A billing enabled Google service account with Google Vision access enabled.

Note that you will be prompted for your Europeana API key and the path to your Google service account file.

```bash
cd data
pipenv --python 3.7
pipenv install
pipenv run python data-generator.py
```

To use the fetched data in the web application switch out the `data.json` files.
