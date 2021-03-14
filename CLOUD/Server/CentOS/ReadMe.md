# CentOS 


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Restart](#restart)
- [Instal & update DNF](#instal-update-dnf)
- [Install Python](#install-python)
  - [Modify existing Symbolic Link (Setting Python3 Standard)](#modify-existing-symbolic-link-setting-python3-standard)
- [Show Resources](#show-resources)
  - [List Hardware](#list-hardware)
  - [Show used ports](#show-used-ports)
  - [Show used space](#show-used-space)

<!-- /code_chunk_output -->


## Restart

```shell
shutdown -r
```

## Instal & update DNF

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
    
