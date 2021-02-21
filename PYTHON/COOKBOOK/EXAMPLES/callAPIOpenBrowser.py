from urllib.request import urlopen
import json
import webbrowser

url = 'https://swapi.dev/api/people/1'  # JSON REST API
contents = json.loads(urlopen(url).read().decode('utf-8'))
webbrowser.open(contents['homeworld'])
