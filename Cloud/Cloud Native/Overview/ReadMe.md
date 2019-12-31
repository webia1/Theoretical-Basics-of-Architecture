# Cloud Native Overview

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Cloud Native Overview](#cloud-native-overview)
  - [Basic Terms & Terminology](#basic-terms-terminology)
  - [Docker](#docker)
    - [Key Concepts](#key-concepts)
    - [Key Docker Commands](#key-docker-commands)
    - [Ways to create a new Docker image](#ways-to-create-a-new-docker-image)
    - [Writing a Dockerfile, building from it and starting](#writing-a-dockerfile-building-from-it-and-starting)
      - [Docker diff](#docker-diff)
    - [Docker layering](#docker-layering)
  - [Kubernetes](#kubernetes)
    - [Pods](#pods)

<!-- /code_chunk_output -->

## Basic Terms & Terminology

- Cloud Native

- Docker (Build, ship, run any app, anywhere)

  - Docker Image
  - Docker Container
  - Layer

- Kubernetes

  - Container Orchestration
    - Scheduling,
    - Coordination,
    - Deployment of Containers
    - Managing of
      - Resources
      - Network, IP,..
      - Storage Resources
  - Pods (running container-group(s) in Kubernetes)

## Docker

> [See also **Docker Chapter** here](Cloud/Docker/Dockerfile)

### Key Concepts

A **container** is a running instance of an **image**. You can use **multiple containers** running **from the same image**. Changes to files are stored within containers, the **base image** cannot be affected by a container.

### Key Docker Commands

```
build       Build an image from a Dockerfile
run         Run a command in a new container
commit      Create a new image from a container's changes
tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
push        Push an image or a repository to a registry
```

### Ways to create a new Docker image

- Docker Commands
  - `docker run EXISTING_IMAGE` then
  - create a new one with `docker commit NEW_IMAGE`
- Build from a so called `Dockerfile`
- CM Tool (Dockerfile and Configuration Management Tool)
- Scratch image and import a set of files

### Writing a Dockerfile, building from it and starting

Name it `Dockerfile`

```Dockerfile
FROM node
  LABEL maintainer emailadress
  RUN git clone -q https://github.com/some-repo/some-app.git # -q --quiet
  WORKDIR some-app
  RUN npm install > /dev/null
  EXPOSE 8000
  CMD ["npm", "start"]
```

```shell
docker container ls
docker tag id_of_image some-app # see Dockerfile above
docker run -it -p 8000:8000 --name my-app1 some-app

```

#### Docker diff

The `docker diff <container-id | container-name>` shows you affected files since the image was instantiated as a container.

### Docker layering

Docker internally uses a `copy-on-write` mechanism: you only copy data over when it's changed. Images are created from a layered file system, which reduces the space used by Docker images on your host.

## Kubernetes

### Pods

A pod is a **co-located** group of containers and represents the **basic building blocks in Kubernetes**. Instead of deploying containers individually you always deploy and operate on a pod of containers.

A pod of containers allows you to run closely related containers together and provide them with (almost) same environment as if they were all running in a single container, while keeping them somewhat isolated.

> Kubernetes pods isolate group of containers instead of individual ones:

Kubernetes achieves this by configuring Docker to have all containers of a pod share the same set of Linux namespaces instead of each container having its own set.

Because all containers of a pod run under the same **Network and UTS namespaces** (= Linux namespaces), they all share the same hostname and can communicate through **IPC**. In the latest Kubernetes and Docker versions, they can also share the same **PID namespace**, but that feature is **not enabled by default**.

Filesystems of containers remain still completely isolated from each other. However, it is possible to have them share file directories using a kubernetes concept called a **Volume**.

Containers in a pod run in the same **network namespace**, they share the **same IP-Adress**, **port space** and **loopback network interface**, so a container can communicate with other containers in the same pod **through localhost**.

```ditaa {cmd=true args=["-E"]}
  +---------------------------+ +---------------------------+
  |           Node 1          | |           Node 2          |
  +-------------+-------------+ +-------------+-------------+
  |   Pod A     |   Pod B     | |   Pod C     |   Pod D     |
  +-------------+-------------+ +-------------+-------------+
  | Container 1 | Container 1 | | Container 1 | Container 1 |
  +-------------+-------------+ +-------------+-------------+
  | Container 2 | Container 2 | | Container 2 | Container 2 |
  +-------------+-------------+ +-------------+-------------+
  | Container 3 |             |               |
  +-------------+-------------+               |
                |                             |
  --------------+-----------------------------+--------------
                        Flat network
```
