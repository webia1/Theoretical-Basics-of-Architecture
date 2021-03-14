# CentOS 

## Restart

   shutdown -r

## Instal & update DNF

    yum install dnf
    dnf update 

## Install Python

    dnf install python3

## Show Hardware/Software Resources

    yum install lshw      # if not installed
    lshw
    lshw -short
    
## Show used ports 

    yum install nmap
    nmap -v -A ebia.eu
    
## Show used space

    df -h                 # -h, --human-readable
    
