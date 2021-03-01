# Python Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Install pylint](#install-pylint)
  - [Generate .pylintrc](#generate-pylintrc)
  - [Create Kernel For Jupyter](#create-kernel-for-jupyter)
- [Install Python Env (Like nvm or n in nodejs)](#install-python-env-like-nvm-or-n-in-nodejs)
- [Clear Python Interpreter Console](#clear-python-interpreter-console)
  - [Via `os.system``](#via-ossystem)
  - [Tricky](#tricky)
- [Call JSON API and open Browser](#call-json-api-and-open-browser)
- [Trouble Shooting](#trouble-shooting)
  - [Install the x86_64 version of Homebrew](#install-the-x86_64-version-of-homebrew)
  - [The headers or library files could not be found for jpeg, a required dependency when compiling Pillow from source.](#the-headers-or-library-files-could-not-be-found-for-jpeg-a-required-dependency-when-compiling-pillow-from-source)
  - [Installing Matplotlib](#installing-matplotlib)
  - [Delete Pip Cache](#delete-pip-cache)
  - [PyEnv Install Problems](#pyenv-install-problems)
    - [.zshrc File](#zshrc-file)
    - [To get the right paths use](#to-get-the-right-paths-use)
    - [Install an old version with patch](#install-an-old-version-with-patch)

<!-- /code_chunk_output -->

## Install pylint

    sudo -H python -m pip install pylint

### Generate .pylintrc

    pylint --generate-rcfile >> .pylintrc

### Create Kernel For Jupyter

Change to an existing env, install jupiter and name

    conda activate tha
    pip install jupyter
    ipython kernel install --name "tha" --user
    jupyter notebook # change Kernel on the UI
    
## Conda List Environments

   conda info --envs

OR

   conda env list
  
    

## Install Python Env (Like nvm or n in nodejs)

    brew install pyenv

Edit `~/.zshrc` and add pyenv related information

    export PYENV_ROOT="${HOME}/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"

Install a python version and use it

    pyenv install --list   # List available packages
    pyenv install 3.7.6
    pyenv versions         # Show installed Versions
    pyenv global 3.7.6.    # Set Version 3.7.6 global

## Install older Versions of Python

> Important: Change Environment to a Apple Supported Version before, like

    . "/Users/user/tensorflow_macos_venv/bin/activate"

then use

    pyenv install 3.7.9

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

### Install the x86_64 version of Homebrew

    arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

### The headers or library files could not be found for jpeg, a required dependency when compiling Pillow from source.

```bash
brew install libtiff libjpeg webp little-cms2
```

### Installing Matplotlib

    python -m pip install -U matplotlib --prefer-binary

### Delete Pip Cache

    echo "$(pip cache dir)" # Detect where it is
    rm -r "$(pip cache dir)"

### PyEnv Install Problems

#### .zshrc File

```shell
# EBIA
export PATH="/opt/homebrew/opt/python3/libexec/bin:$PATH"
export PATH="/Users/user/Library/Python/3.9/lib/python/site-packages:$PATH"
export PYENV_ROOT="${HOME}/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
export PATH="/opt/homebrew/opt/bzip2/bin:$PATH"

eval "$(pyenv init -)"

export LDFLAGS="-L/opt/homebrew/opt/zlib/lib -L/opt/homebrew/opt/openssl@1.1/lib -L/opt/homebrew/opt/readline/lib  -L/opt/homebrew/opt/bzip2/lib"
export CFLAGS="-I/opt/homebrew/opt/zlib/include -I/opt/homebrew/opt/openssl@1.1/include -I/opt/homebrew/opt/readline/include -I/opt/homebrew/opt/bzip2/include -I/Applications/Xcode-beta.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include"
```

#### To get the right paths use

```shell
brew --prefix zlib
# /opt/homebrew/opt/zlib

brew --prefix openssl
# /opt/homebrew/opt/openssl@1.1

brew --prefix readline
# /opt/homebrew/opt/readline

brew --prefix bzip2
# /opt/homebrew/opt/bzip2

xcrun --show-sdk-path
# /Applications/Xcode-beta.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk
```

#### Install an old version with patch

```shell
pyenv install --patch 3.6.13 < <(curl -sSL https://github.com/python/cpython/commit/8ea6353.patch\?full_index\=1)
```
