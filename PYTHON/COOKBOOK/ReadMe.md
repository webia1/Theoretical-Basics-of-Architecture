# Python Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Install pylint](#install-pylint)
  - [Generate .pylintrc](#generate-pylintrc)
- [Clear Python Interpreter Console](#clear-python-interpreter-console)
  - [Via `os.system``](#via-ossystem)
  - [Tricky](#tricky)
- [Call JSON API and open Browser](#call-json-api-and-open-browser)

<!-- /code_chunk_output -->

## Install pylint

    sudo -H python -m pip install pylint

### Generate .pylintrc

    pylint --generate-rcfile >> .pylintrc

## Clear Python Interpreter Console

### Via `os.system``

```python
>>> import os
>>> clear = lambda: os.system('cls')
>>> clear()
```

### Tricky

```python
>>> cls = lambda: print("\033c\033[3J", end='')
>>> cls()
```

```python
# Or directly:
>>> print("\033c\033[3J", end='')
```

## Call JSON API and open Browser

```Python
from urllib.request import urlopen
import json
import webbrowser

url = 'https://swapi.dev/api/people/1'  # JSON REST API
contents = json.loads(urlopen(url).read().decode('utf-8'))
webbrowser.open(contents['homeworld'])
```

## Trouble Shooting

### The headers or library files could not be found for jpeg, a required dependency when compiling Pillow from source.

```bash
brew install libtiff libjpeg webp little-cms2
```
