# CentOS 

## Restart

   shutdown -r

## Instal & update DNF

    yum install dnf
    dnf update 

## Install Python

    dnf install python3
    
### Modify existing Python Symbolic Link

    # ATTENTION yum requires python2
    sudo ln -sf python3 python    # f -> Update existing
    sudo ln -sf pip-3 pip
    
### Set Python3 as standard

    echo 'export PATH="/usr/bin/python3/libexec/bin:$PATH"' >>  ~/.bashrc 

## Show Hardware/Software Resources

    yum install lshw      # if not installed
    lshw
    lshw -short
    
## Show used ports 

    yum install nmap
    nmap -v -A ebia.eu
    
## Show used space

    df -h                 # -h, --human-readable
    
