# Portainer Setup

## Linux

    docker run -d -p 8000:8000 -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

## Windows

    docker run -d -p 8000:8000 -p 9000:9000 -v //var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
