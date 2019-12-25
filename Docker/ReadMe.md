# Docker

## Basic Commands

### Remove all unused Objects

    docker system prune
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

    CONTAINER ID    somestring
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

## Trouble Shooting

### Unable to connect to the Docker Container from the host browser on MacOS

Another workaround is to use `sudo ifconfig lo0 alias 172.17.0.1` so you can still use the same static IP address (if your Linux-based colleagues or bash scripts insist on using that). [See online here.](https://github.com/docker/for-mac/issues/2670) For Python related issues [here](https://pythonspeed.com/articles/docker-connection-refused/)
