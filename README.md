# Generous Interface Fashion
[![Build Status](https://travis-ci.org/riksantikvarieambetet/Generous-Interface-Fashion.svg?branch=master)](https://travis-ci.org/riksantikvarieambetet/Generous-Interface-Fashion)

This project was created within the scope of the Swedish National Heritage Board's evaluation of generous interfaces as a complement to common web interfaces of archives and museums often dominated by text search. This prototype is centered around images and fashion.

## Setup

```bash
git clone 
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
 - An billing enabled Google service account with Google Vision access enabled.

Note that you will be prompted for your Europeana API key and the path to your Google service account file.

```bash
cd data
pipenv install
pipenv run python data-generator.py
```

To use the fetched data in the web application switch out the `data.json` files.
