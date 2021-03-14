# CentOS 


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Restart](#restart)
- [Install & update DNF](#install-update-dnf)
- [Install Python](#install-python)
  - [Modify existing Symbolic Link](#modify-existing-symbolic-link)
  - [Install Python Versions Manager PyEnv](#install-python-versions-manager-pyenv)
  - [Install Different Python Versions](#install-different-python-versions)
  - [Install Python/Anaconda (not to confuse with Linux Anaconda)](#install-pythonanaconda-not-to-confuse-with-linux-anaconda)
    - [Deactivating Base-Environment at Start-Up](#deactivating-base-environment-at-start-up)
    - [Trouble Shooting - LC_CTYPE: cannot change locale (UTF-8)](#trouble-shooting-lc_ctype-cannot-change-locale-utf-8)
- [Show Resources](#show-resources)
  - [List Hardware](#list-hardware)
  - [Show used ports](#show-used-ports)
  - [Show used space](#show-used-space)

<!-- /code_chunk_output -->


## Restart

```shell
shutdown -r
```

## Install & update DNF

```shell
yum install dnf
dnf update 
```

## Install Python

```shell
dnf install python3
```
    
### Modify existing Symbolic Link 

That would change e.g. python to python3, but avoid this approach because `yum` would not work. If you want to change Python version, then use `pyenv`.

```shell
# ATTENTION yum requires python2 -> Change better via PyEnV!
sudo ln -sf python3 python    # f -> Update existing
sudo ln -sf pip-3 pip
```

### Install Python Versions Manager PyEnv

Follow the instructions after the installation:

```shell
curl https://pyenv.run | bash   # OR
curl -s -S -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash # OR
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

### Install Different Python Versions

Examples:

```shell
pyenv install 3.9.2
pyenv install 3.8.8
pyenv install 3.7.10
pyenv install 3.6.13
```

### Install Python/Anaconda (not to confuse with Linux Anaconda)

```shell
# PREREQUISITES
yum install libXcomposite libXcursor libXi libXtst 
yum install libXrandr alsa-lib mesa-libEGL libXdamage mesa-libGL libXScrnSaver

# DOWNLOAD INSTALLATION PACKAGE
# Details here: https://www.anaconda.com/products/individual#linux
wget https://repo.anaconda.com/archive/Anaconda3-2020.11-Linux-x86_64.sh
bash ./Anaconda3-2020.11-Linux-x86_64.sh

# THEN FOLLOW THE INSTRUCTIONS
```

#### Deactivating Base-Environment at Start-Up

```shell
conda config --set auto_activate_base false
bash -l  # RESTART BASH
```

#### Trouble Shooting - LC_CTYPE: cannot change locale (UTF-8)

Add the following to `~/.bashrc`

```shell
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```


## Show Resources    

###  List Hardware

    yum install lshw      # if not installed
    lshw
    lshw -short
    
### Show used ports 

    yum install nmap
    nmap -v -A ebia.eu
    
### Show used space

    df -h                 # -h, --human-readable
    
