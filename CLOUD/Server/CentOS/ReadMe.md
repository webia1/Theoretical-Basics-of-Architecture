# CentOS 


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Restart](#restart)
- [Install & update DNF](#install-update-dnf)
- [Install Python](#install-python)
  - [Modify existing Symbolic Link (Setting Python3 Standard)](#modify-existing-symbolic-link-setting-python3-standard)
  - [Install Python Versions Manager PyEnv](#install-python-versions-manager-pyenv)
  - [Install Different Python Versions](#install-different-python-versions)
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
    
### Modify existing Symbolic Link (Setting Python3 Standard)

```shell
# ATTENTION yum requires python2
sudo ln -sf python3 python    # f -> Update existing
sudo ln -sf pip-3 pip
```

### Install Python Versions Manager PyEnv

Follow the instructions after the installation:

```shell
curl https://pyenv.run | bash
```

### Install Different Python Versions

Examples:

```shell
pyenv install 3.9.2
pyenv install 3.8.8
pyenv install 3.7.10
pyenv install 3.6.13
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
    
