# Docker

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Docker](#docker)
  - [Basic Commands](#basic-commands)
    - [Remove all unused Objects](#remove-all-unused-objects)
    - [Stop and Remove all Containers](#stop-and-remove-all-containers)
  - [Network Modes](#network-modes)
    - [The Bridge Network mode](#the-bridge-network-mode)
    - [Host Network mode](#host-network-mode)
    - [None Network mode](#none-network-mode)
    - [User Defined Network](#user-defined-network)
  - [Docker Images in Detail](#docker-images-in-detail)
    - [`ADD` Command](#add-command)
  - [Cook Book](#cook-book)
    - [Image No Cache](#image-no-cache)
    - [OnBuild in Dockerfile - Deprecated ??](#onbuild-in-dockerfile-deprecated)
    - [Docker-Machine Virtualbox](#docker-machine-virtualbox)
  - [Trouble Shooting](#trouble-shooting)
    - [Unable to connect to the Docker Container from the host browser on MacOS](#unable-to-connect-to-the-docker-container-from-the-host-browser-on-macos)

<!-- /code_chunk_output -->

## Basic Commands

### Remove all unused Objects

    docker system prune -a
    docker system prune -f  # or --force
    docker system prune --volumes

### Stop and Remove all Containers

To remove a container, do have to stop it before:

    docker container stop $(docker container ls -aq)
    docker container rm $(docker container ls -aq)

**Notice:**

If containers started with `-d` flag, they will be immediately removed after stopping.

## Network Modes

### The Bridge Network mode

    docker network ls

    NETWORK ID          NAME                DRIVER              SCOPE
    f6ed2d9cc1a4        bridge              bridge              local
    ecdc32917265        host                host                local
    36cd57528afa        none                null                local

**Run a simple docker image**

    docker run -d --name webia1 -p 8080:80 --rm yeasy/simple-web

    -d    detached mode (Runs in background)
    -p    8080:80  (HostPort:ContainerPort)
    --rm  delete the container after stopping it
    yeasy/simple-web  Python based image

**Inspect it's IP**

    docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' webia1

    172.17.0.2

**Show running containers**

    docker container ls

**or**

    docker ps

**shows:**

    CONTAINER ID    some-string
    IMAGE           yeasy/simple-web
    COMMAND         "/bin/sh -c 'python …"
    CREATED         2 minutes ago
    STATUS          Up 2 minutes
    PORTS           80/tcp
    NAMES           webia1

**Inspect Network**

    docker network inspect bridge

```json
[
  {
    "Name": "bridge",
    "Id": "f6ed2d9cc1a4aea0390bb0cd92b0ab4480c45356d15acd8fa2ba42561f4ee46e",
    "Created": "2019-12-25T16:03:50.793007687Z",
    "Scope": "local",
    "Driver": "bridge",
    "EnableIPv6": false,
    "IPAM": {
      "Driver": "default",
      "Options": null,
      "Config": [
        {
          "Subnet": "172.17.0.0/16"
        }
      ]
    },
    "Internal": false,
    "Attachable": false,
    "Ingress": false,
    "ConfigFrom": {
      "Network": ""
    },
    "ConfigOnly": false,
    "Containers": {
      "ee8d434faec284d0da117803": {
        "Name": "webia1",
        "EndpointID": "036c75eea989d389843dc",
        "MacAddress": "02:42:ac:11:00:02",
        "IPv4Address": "172.17.0.2/16",
        "IPv6Address": ""
      }
    },
    "Options": {
      "com.docker.network.bridge.default_bridge": "true",
      "com.docker.network.bridge.enable_icc": "true",
      "com.docker.network.bridge.enable_ip_masquerade": "true",
      "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
      "com.docker.network.bridge.name": "docker0",
      "com.docker.network.driver.mtu": "1500"
    },
    "Labels": {}
  }
]
```

### Host Network mode

Without `-p HostPort:ContainerPort`

    docker run -d --name webia2 --network=host --rm yeasy/simple-web

### None Network mode

    docker run -d --rm --network none busybox sleep 5000

### User Defined Network

    docker network create webia-net
    docker network ls

    NETWORK ID          NAME                DRIVER              SCOPE
    f6ed2d9cc1a4        bridge              bridge              local
    ecdc32917265        host                host                local
    36cd57528afa        none                null                local
    fe034ae08547        webia-net           bridge              local

    docker run -d --name webia1 --network=webia-net --rm yeasy/simple-web
    docker run -d --name webia2 --network=webia-net --rm yeasy/simple-web

**Connecting to a started container via `docker exec`**

    docker exec -it CONTAINER_ID sh

**Starting and connecting**

    docker run -it --rm busybox

BusBox is the Swiss Army Knife of Embedded Linux [see here](wikipedia.org/wiki/BusyBox)

## Docker Images in Detail

### `ADD` Command

**Create a `Dockerfile` with the following content:**

    FROM alpine
    ADD sample_deletable_files/myfiles.tar /home/

**Build Docker**

`docker` `build` `-t` `image-name`:`Version` `/path-to/Dockerfile`

If version is not given then it will be the `latest`

    docker build -t my-image-name:1.0.0 .


    Sending build context to Docker daemon  23.55kB
    Step 1/2 : FROM alpine
    latest: Pulling from library/alpine
    e6b0cf9c0882: Pull complete
    Digest: sha256:2171658620155679240babee0a7714f6509fae66898db422ad803b951257db78
    Status: Downloaded newer image for alpine:latest
    ---> cc0abc535e36
    Step 2/2 : ADD sample_deletable_files/myfiles.tar /home/
    ---> a8125f6dd3b0
    Successfully built a8125f6dd3b0
    Successfully tagged my-image-name:1.0.0

**Run Docker**

    `docker` `run` `-it` `image-name`[:`version]` `shell-name`

    -i, --interactive    Keep STDIN open even if not attached
    -t, --tty            Allocate a pseudo-TTY

Example:

    docker images

    REPOSITORY      TAG       IMAGE ID        CREATED         SIZE
    my-image-name   1.0.0     a8125f6dd3b0    4 minutes ago   5.59MB
    alpine          latest    cc0abc535e36    40 hours ago    5.59MB

If the version is not the `latest` you have the use it so:

    docker run -it my-image-name:1.0.0 sh

## Cook Book

### Image No Cache

    docker build -t my-image-name:1.0.0 . --no-cache

### OnBuild in Dockerfile - Deprecated ??

    FROM  python:onbuild
    CMD   python app.py

**See Following Issues:**

- [Docker ONBUILD deprecated?](https://github.com/pypa/pipenv/issues/2627)
- [Python removes onbuild](https://github.com/docker-library/python/pull/314)

### Docker-Machine Virtualbox

**Notice:** Virtualbox is already installed.

1. Create a docker-machine

   ```
   docker-machine create --driver virtualbox ebia-docker-host1
   ```

2. Get the env-variables of the created machine

   ```
   docker-machine env ebia-docker-host1

   export DOCKER_TLS_VERIFY="1"
   export DOCKER_HOST="tcp://192.168.99.100:2376"
   export DOCKER_CERT_PATH="/Users/userxy/.docker/machine/machines/ebia-docker-host1"
   export DOCKER_MACHINE_NAME="ebia-docker-host1"
   # Run this command to configure your shell:
   # eval $(docker-machine env ebia-docker-host1)
   ```

3. Add env-variables to your current shell

   ```
   eval $(docker-machine env ebia-docker-host1)
   ```

4. Run an http server

   ```
   docker run -d -p 8080:80 httpd
   ```

5. Get the IP-Adress of the created docker-machine

   ```
   docker-machine ip ebia-docker-host1
   ```

6. Open browser: http://the-ip-adress-given-above:8080

7. Then stop the virtual machine on virtualbox and remove it:
   ```
   docker-machine rm ebia-docker-host1
   ```

## Trouble Shooting

### Unable to connect to the Docker Container from the host browser on MacOS

Another workaround is to use `sudo ifconfig lo0 alias 172.17.0.1` so you can still use the same static IP address (if your Linux-based colleagues or bash scripts insist on using that). [See online here.](https://github.com/docker/for-mac/issues/2670) For Python related issues [here](https://pythonspeed.com/articles/docker-connection-refused/)
