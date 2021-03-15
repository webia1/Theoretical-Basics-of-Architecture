# CentOS

Deals with the topics, among other things:

- Preparing CentOS for Python/AI  Applications


## Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Table of Contents](#table-of-contents)
- [Restart Server](#restart-server)
- [Install & update DNF](#install-update-dnf)
- [Install Python](#install-python)
  - [Modify existing Symbolic Link](#modify-existing-symbolic-link)
  - [Unterstanding Differences Between `venv` & `pyenv`](#unterstanding-differences-between-venv-pyenv)
  - [Using `venv`](#using-venv)
  - [Install Python Versions Manager PyEnv](#install-python-versions-manager-pyenv)
  - [Install Different Python Versions](#install-different-python-versions)
  - [Install Python/Anaconda (not to confuse with Linux Anaconda)](#install-pythonanaconda-not-to-confuse-with-linux-anaconda)
    - [Deactivating Base-Environment at Start-Up](#deactivating-base-environment-at-start-up)
    - [Create, activate, deactivate. list an environment with `conda`](#create-activate-deactivate-list-an-environment-with-conda)
    - [Use Jupyter in this context](#use-jupyter-in-this-context)
      - [Jupyter IP/Port Settings](#jupyter-ipport-settings)
    - [Trouble Shooting](#trouble-shooting)
      - [LC_CTYPE: cannot change locale (UTF-8)](#lc_ctype-cannot-change-locale-utf-8)
      - [No module named `_ctypes`](#no-module-named-_ctypes)
- [Show Resources](#show-resources)
  - [List Hardware](#list-hardware)
  - [Show used ports](#show-used-ports)
  - [Show used space](#show-used-space)
- [Install Python Support on Plesk](#install-python-support-on-plesk)
- [Clean Up Yum Packages](#clean-up-yum-packages)
- [CentOS Yum Security Updates](#centos-yum-security-updates)
- [Docker](#docker)
  - [Installation](#installation)
    - [Context](#context)
    - [Docker Trouble Shooting](#docker-trouble-shooting)
      - [Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?](#cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running)

<!-- /code_chunk_output -->


## Restart Server

```shell
shutdown -r now
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

### Unterstanding Differences Between `venv` & `pyenv`

- `venv`: Single Version of Pyhton
  - Different Environments (Packages)
- `pyenv`: Multiple Versions of Pyhton

Use both if multiple versions with different environments. In this case you can also use `Anaconda` (see below).

### Using `venv`

It does not have to be installed explicitly.

```shell
# CREATE AN ENVIRONMENT
# Uses the current global python version (e.g. 3.x.y)
python3 -m venv my-env-v3  # directory ./my-env-v3

# CREATE AN ENVIRONMENT WITH A CERTAIN VERSION e.g. v3.6
python3.6 -m venv my-env-v3

# ACTIVATE 
source ./my-env-v3/bin/activate

# DEACTIVATE
deactivate

# REMOTE COMPLETELY
rm -rf ./my-env-v3
```

### Install Python Versions Manager PyEnv

Follow the instructions after the installation:

```shell
curl https://pyenv.run | bash   # OR
curl -s -S -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash # OR
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

### Install Different Python Versions

```shell
# LIST ALL EXISTING VERSIONS
pyenv install --list

# UPDATE IF NEWEST VERSIONS ARE MISSING
cd /root/.pyenv/plugins/python-build/../.. && git pull && cd -
```

Examples:

```shell
pyenv install 3.9.2
pyenv install 3.8.8
pyenv install 3.7.10
pyenv install 3.6.13
pyenv install miniconda-3.10.1
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

#### Create, activate, deactivate. list an environment with `conda`

```shell
conda env list
conda create --name conda-ebia-p392
conda activate conda-ebia-p392
conda deactivate
```

#### Use Jupyter in this context

```shell
conda create --name conda-ebia-p392
conda activate conda-ebia-p392
ipython kernel install --name conda-ebia-p392 --user

# START NOTEBOOK
jupyter notebook
```

##### Jupyter IP/Port Settings

```shell
jupyter notebook --ip=0.0.0.0 --port=80 or
ipython notebook --ip=0.0.0.0 --port=80
```

#### Trouble Shooting 

##### LC_CTYPE: cannot change locale (UTF-8)

Add the following to `~/.bashrc`

```shell
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```
And to `/etc/environment`

```shell
LANG=en_US.utf-8
LC_ALL=en_US.utf-8
```

##### No module named `_ctypes`

```shell
yum install libffi-devel
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
    
## Install Python Support on Plesk

```shell
wget http://repo.iotti.biz/CentOS/7/noarch/lux-release-7-1.noarch.rpm
rpm -Uvh lux-release*rpm
yum install mod_python -y

# RESTART HTTP or SERVER
service httpd restart # OR
shutdown -r now
```

## Clean Up Yum Packages

```shell
# TRANSACTION MANAGEMENT
yum-complete-transaction
yum-complete-transaction --cleanup-only
yum history redo last

# FURTHER CLEAN UPS
package-cleanup --problems
package-cleanup --dupes
rpm -Va --nofiles --nodigest
```

## CentOS Yum Security Updates

Some of available commands:

```shell
yum install yum-plugin-security
yum --security check-update
yum --security update
yum --security update-minimal
yum updateinfo list security all
yum info-sec
man yum-security
```

## Docker 

### Installation

```shell
yum install docker
```

#### Context

```shell
docker context create \ 
--docker host=ssh://docker-user@example.com \
--description="Remote Engine" my-remote-engine
```

#### Docker Trouble Shooting

##### Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

```shell
sudo systemctl unmask docker
systemctl start docker
systemctl status docker
```