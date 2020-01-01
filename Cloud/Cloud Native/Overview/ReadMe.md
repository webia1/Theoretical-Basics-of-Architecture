# Cloud Native Overview

> My own notices from the Book: [Going Cloud Native by Ian Miell](https://www.manning.com/books/going-cloud-native) purchased at Manning Publications.

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
    - [What is a pod?](#what-is-a-pod)
    - [Creating pods from YAML or JSON descriptors](#creating-pods-from-yaml-or-json-descriptors)
      - [The structure of a pod description file (YAML):](#the-structure-of-a-pod-description-file-yaml)
      - [Using `kubectl` to get help and description](#using-kubectl-to-get-help-and-description)
      - [Using `kubectl` to create the pod:](#using-kubectl-to-create-the-pod)
      - [Retrieving the whole definition of a _running_ pod:](#retrieving-the-whole-definition-of-a-_running_-pod)
        - [As yaml](#as-yaml)
        - [As JSON](#as-json)
      - [Seeing list of _pods_](#seeing-list-of-_pods_)
      - [Getting Logs](#getting-logs)
        - [Specifying the container name when getting logs of a multi-container pod](#specifying-the-container-name-when-getting-logs-of-a-multi-container-pod)
      - [Forwarding a local network port to a port in the pod](#forwarding-a-local-network-port-to-a-port-in-the-pod)
    - [Specifying labels when creating a pod](#specifying-labels-when-creating-a-pod)
    - [Listing pods with labels](#listing-pods-with-labels)
      - [Instead of all labels just the desired ones:](#instead-of-all-labels-just-the-desired-ones)
      - [Listing all with a certain value:](#listing-all-with-a-certain-value)
      - [Listing all with a certain label:](#listing-all-with-a-certain-label)
      - [Listing all except a certain label:](#listing-all-except-a-certain-label)
      - [Matching pods (further possibilities)](#matching-pods-further-possibilities)
        - [Multiple conditions with comma-separated criteria](#multiple-conditions-with-comma-separated-criteria)
      - [Modifying labels of existing pods](#modifying-labels-of-existing-pods)
      - [Label Selectors are important because](#label-selectors-are-important-because)
    - [Scheduling via Labels and Selectors](#scheduling-via-labels-and-selectors)
      - [Using labels for categorizing worker nodes](#using-labels-for-categorizing-worker-nodes)
      - [Scheduling pods to specific nodes](#scheduling-pods-to-specific-nodes)
      - [Scheduling to one specific node](#scheduling-to-one-specific-node)
    - [Annotating pods](#annotating-pods)
      - [Adding and modifying annotations](#adding-and-modifying-annotations)
      - [See added annotations](#see-added-annotations)
    - [Namespaces](#namespaces)
      - [Discovering namespaces and their pods](#discovering-namespaces-and-their-pods)
      - [Creating a namespaces](#creating-a-namespaces)
        - [From a YAML file](#from-a-yaml-file)
        - [With **`kubectl`**](#with-kubectl)
      - [Managing objects in other namespaces](#managing-objects-in-other-namespaces)
        - [Creating a pod with a new namespace](#creating-a-pod-with-a-new-namespace)

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
    - Sidecar containers
      - Log rotators
      - Collectors
      - Data processors
      - Communication adapters
    - Labels and selectors
    - Annotations
    - Namespaces

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

### What is a pod?

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
  --------------+-----------------------------+-------------
                        Flat network
```

**Recommendation**: Put frontend and backend into different pods. (**A pod** is the **basic unit of scaling**.) A container shouldn't contain multiple containers if they don't need to run on the same machine. See the following figure:

```ditaa {cmd=true args=["-E"]}
  +---------------------------+  +---------------------------+
  |      Frontend Pod         |  |      Backend Pod          |
  |  +--------------------+   |  |  +--------------------+   |
  +  | Frontend Container |   +  +  | Backend Container  |   +
  |  |  +--------------+  |   |  |  |  +--------------+  |   |
  +  |  |   Frontend   |  |   +  +  |  |   Backend    |  |   +
  |  |  |   Process    |  |   |  |  |  |   Process    |  |   |
  +  |  +--------------+  |   +  +  |  +--------------+  |   +
  |  +--------------------+   |  |  +--------------------+   |
  +-------------+-------------+  +-------------+-------------+
                |                              |
  --------------+------------------------------+-------------
                        Flat network
```

### Creating pods from YAML or JSON descriptors

> See further details on [Kubernetes Website online](https://kubernetes.io/docs/reference/)

> Examine [**`kubectl`** command here](https://kubernetes.io/docs/reference/kubectl/overview/)

#### The structure of a pod description file (YAML):

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: name-of-the-pod
spec:
  containers:
    - image: some/image
      name: name-of-the-container
      ports:
        - containerPort: 8080 # has no effect, doc only
          protocol: TCP
```

#### Using `kubectl` to get help and description

```bash {cmd=true}
kubectl explain pods
```

```bash {cmd=true}
kubectl explain pod.spec
```

#### Using `kubectl` to create the pod:

```bash
kubectl create -f my-resource-description.yaml
```

#### Retrieving the whole definition of a _running_ pod:

##### As yaml

```bash
kubectl get po my-running-pod-name -o yaml
```

##### As JSON

```bash
kubectl get po my-running-pod-name -o json
```

#### Seeing list of _pods_

```bash
kubectl get pods
```

#### Getting Logs

```bash
docker logs <container-id>
kubectl logs <pod-name>
```

##### Specifying the container name when getting logs of a multi-container pod

```bash
kubectl logs <pod-name> -c <container-name>
```

**Important notice:** To make a pod#s log available even after the pod is deleted, you need to set up centralized, cluster-wide logging, which stores all the logs into a central store.

#### Forwarding a local network port to a port in the pod

```bash
kubectl port-forward <pod-name> 8888:8080
```

A simplified view of what happens when you use `curl` with `kubectl port-forward`:

```ditaa {cmd=true args=["-E"]}
+--------------------------------------+    +---------------------+
|             Port                     |    | Port                |
|+--------+   8888  +---------------+  |    | 8080  +------------+|
||  curl  +-------->|  kubectl      +-------------->|  Pod       ||
||        |         |  port-forward |  |    |       |  whatever  ||
||        |<--------|  process      |<--------------|            ||
|+--------+         +---------------+  |    |       +------------+|
| Local Machine                        |    | Kubernetes cluster  |
+--------------------------------------+    +---------------------+
```

### Specifying labels when creating a pod

> [API Conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md)

> [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)

Organizing pods and all other Kubernetes objects is done through **labels** e.g. within pod description file:

```yaml
# An Example:
metadata:
  name: name-of-the-pod
  labels:
    creation_method: manual
    env: prod
    tier: frontend
```

You can create the pod as usual:

`kubectl create -f` **`my-pod-desc-file-with-labels.yaml`**

See details on command line:

```bash {cmd=true}
kubectl explain pod.metadata.labels
```

### Listing pods with labels

    kubectl get po --show-labels
    kubectl get pods --show-labels

#### Instead of all labels just the desired ones:

`kubectl get po` **`-L`** `creation_method, env`

#### Listing all with a certain value:

`kubectl get po` **`-l`** `creation_method=manual`

#### Listing all with a certain label:

`kubectl get po` **`-l`** `env`

#### Listing all except a certain label:

`kubectl get po` **`-l`** **`'!env'`**

Make sure to use single quotes around **`!env`**, so the bash shell doesn't evaluate the exclamation mark.

#### Matching pods (further possibilities)

- creation_method!=manual
- env in (prod, devel)
- env not in (prod, devel)

##### Multiple conditions with comma-separated criteria

Multiple conditions are also possible: `creation_method=auto,env=debug`

#### Modifying labels of existing pods

`kubectl` **`label`** `po <pod_name> <prop>:<value>`

`kubectl` **`label`** `po my-pod-a env=debug`

**Overwrite** if prop exists:

`kubectl` **`label`** `po my-pod-a env=debug` **`--overwrite`**

#### Label Selectors are important because

Label selectors allow you select a subset of pods tagged with certain labels and perform an operation on those pods. A label selector is a criterion, which filters resources based on whether they include a certain label with a certain value.

### Scheduling via Labels and Selectors

#### Using labels for categorizing worker nodes

```bash
kubectl get nodes
# pick one of them e.g. node-name-xyz
kubectl label node node-name-xyz gpu=true
```

`kubectl` **`get`** **`nodes`** **`-l`** `gpu=true`

#### Scheduling pods to specific nodes

Section **nodeSelector:**

```yaml
metadata:
  name: my-pod1-gpu
spec:
  nodeSelector:
    gpu: 'true'
```

#### Scheduling to one specific node

Similarly, you could also **schedule** a **pod** to an **exact node**, because each **node** also has a **unique label** with the key **kubernetes.io/hostname** and **value** set to the actual **host name** of the **node**.
But setting the nodeSelector to a specific node by the hostname label may lead to the pod being unschedulable if the node is offline.

### Annotating pods

```yaml
#excerpt
metadata:
  annotations:
    whatever:
```

**Annotations** (similar to labels) cannot be used to group objects the way labels can. There is also **no such thing as an annonation selector**. They are primarily **meant to be used by tools**. Certain annonations are automatically added to objects by Kubernetes, but others are added by users manually.

Get yaml description file to see annotations added by Kubernetes automatically:

`kubectl` **`get`** `po my-pod` **`-o`** `yaml`

#### Adding and modifying annotations

`kubectl` **`annotate`** `pod my-pod` **`ebia.eu/myannotation="ia true"`**

#### See added annotations

`kubectl` **`describe`** `pod my-pod`

```yaml
annotations: ebia.eu/myannotation=ia true
```

### Namespaces

Kubernetes **namespaces** isolate groups, they provide **a scope for object names**. Instead of having all your resources in one single namespace, you can split them into multiple namespaces which also allows you to use the same resource names multiple times (across different namespaces).

Beside isolating resources, namespaces are also used for allowing only certain users access to particular resources and even for limiting the amount of computational resources available to individual users.

When listing, describing modifying or deleting objects in other namespaces, you need to pass **`--namespace`** (or **`-n`**) flag to `kubectl`. If you don't, `kubectl` performs the action in the default namespace configured in the current kubectl context, that can be changed through **`kubectl config`** commands.

#### Discovering namespaces and their pods

```bash
kubectl get ns

NAME              STATUS   AGE
default           Active   77d17h
docker            Active   77d17h
kube-node-lease   Active   77d17h
kube-public       Active   77d17h
kube-system       Active   77d17h

kubectl get po --namespace kube-system # also -n

NAME                                     READY   STATUS    RESTARTS   AGE
coredns-6dcc67dcbc-gwvgk                 1/1     Running   0          77d17h
coredns-6dcc67dcbc-qd8qt                 1/1     Running   0          77d17h
etcd-docker-desktop                      1/1     Running   0          77d17h
kube-apiserver-docker-desktop            1/1     Running   0          77d17h
kube-controller-manager-docker-desktop   1/1     Running   0          77d17h
kube-proxy-7mwcv                         1/1     Running   0          77d17h
kube-scheduler-docker-desktop            1/1     Running   0          77d17h
```

#### Creating a namespaces

##### From a YAML file

```yaml
# ebia-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ebia-namespace
```

```bash
kubectl create -f ebia-namespace.yaml

namespace/ebia-namespace created
```

##### With **`kubectl`**

```bash
kubectl create namespace ebia-deletable-namespace
```

#### Managing objects in other namespaces

ss

##### Creating a pod with a new namespace

`kubectl` **`create`** `-f` `my-pod-description.yaml` **`-n`** `a-new-custom-namespace`

### Stopping & removing pods

```bash
kubectl delete po my-pod-name
kubectl delete po my-pod1 my-pod2 my-pod-n # delete more than one
kubectl delete po -l creation_method=manual
kubectl delete po -l rel=canary
kubectl delete ns my-namespace-incl-all-its-pods
kubectl delete po --all # all pods in the current namespace
kubectl delete all --all # delete almost everything incl. ReplicationController (except secrets)
```

**Important Notice:** As soon as you delete a pod created by the ReplicationController, it immediately creates a new one. To delete the pod, you also need the ReplicationController.

TEMPORARY END ------- 01.01.2020
