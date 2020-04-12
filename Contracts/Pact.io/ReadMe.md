# Pact.io Contracts

> [Source](https://docs.pact.io/)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Pact.io Contracts](#pactio-contracts)
  - [Introduction](#introduction)
  - [An example scenario: Order API](#an-example-scenario-order-api)
    - [Consumer](#consumer)
      - [1) Model & Sample Data](#1-model-sample-data)
      - [2) Order API Client](#2-order-api-client)
      - [3) Mock Order API](#3-mock-order-api)
      - [4) Write a Test](#4-write-a-test)
    - [Sharing the Contracts to the Provider Team](#sharing-the-contracts-to-the-provider-team)
      - [Pact Broker](#pact-broker)
        - [Language Support](#language-support)
          - [Ruby](#ruby)
          - [Pact JVM - Gradle](#pact-jvm-gradle)
          - [Pact JVM -JUnit](#pact-jvm-junit)
          - [Pact JVM - SBT](#pact-jvm-sbt)
          - [Pact JVM - Maven](#pact-jvm-maven)
          - [Golang](#golang)
          - [Pact JS](#pact-js)
          - [Pact.NET](#pactnet)
          - [Alternative Approaches](#alternative-approaches)
        - [Publishing](#publishing)
        - [Provider Verification](#provider-verification)
    - [Provider](#provider)
      - [Scope of a Provider Pact Test](#scope-of-a-provider-pact-test)
      - [1) Create the Order API](#1-create-the-order-api)
      - [2) Run provider verification](#2-run-provider-verification)

<!-- /code_chunk_output -->

## Introduction

**Contract testing** is a technique for testing an integration point by checking
each application **in isolation** to ensure the messages it sends or receives
conform to **a shared understanding** that is documented in a **"contract"**.

In general, a contract is **between a consumer** (for example, a client that
wants to receive some data) **and a provider** (for example, an API on a server
that provides the data the client needs).

The **contract is generated during the execution of the automated consumer
tests**. A major advantage of this pattern is that only parts of the
communication that are actually used by the consumer(s) get tested. This in turn
means that any provider behaviour not used by current consumers is free to
change without breaking tests.

Unlike a schema or specification (eg. OAS), which is a static artefact that
describes all possible states of a resource, **a Pact contract is enforced by
executing a collection of test cases**, each of which describes a single
concrete request/response pair - **Pact is, in effect, "contract by example".**

**Without contract testing**, the only way to ensure that applications will work
correctly together is by using **expensive and brittle integration tests**.

## An example scenario: Order API

### Consumer

In the Consumer project, we're going to need:

- A model (the **Order class**) to represent the data returned from the Order
  API
- A client (the **OrderApiClient**) which will be responsible for making the
  HTTP calls to the Order API and returning an internal representation of an
  Order.

Note that to create a pact, **you** **do** need to write the code that executes
the **HTTP requests** to your service (in your client class), but **you don't**
need to write the full stack of consumer code (eg. the UI).

#### 1) Model & Sample Data

#### 2) Order API Client

#### 3) Mock Order API

```js
// Setup Pact
const provider = new Pact({
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'consumeName',
  provider: 'consumeNameApi',
});

// Start the mock service!
await provider.setup();
```

#### 4) Write a Test

Running the passing Order API spec will generate a pact file in the configured
pact dir (`./pacts` by default). Logs will be output to the configured log dir
(`./log`by default) that can be useful when diagnosing problems.

You now have `a pact file` that can be used to verify your expectations of the
Order API provider project.

### Sharing the Contracts to the Provider Team

#### Pact Broker

##### Language Support

###### Ruby

###### Pact JVM - Gradle

###### Pact JVM -JUnit

###### Pact JVM - SBT

###### Pact JVM - Maven

###### Golang

###### Pact JS

###### Pact.NET

###### Alternative Approaches

- Consumer CI build commits pact to Provider codebase
- Publish pacts as CI build artefacts
- Use Guthub/Bitbucket URL
- Publish pacts to Amazon S3
  - [Pact::Retreaty](https://github.com/fairfaxmedia/pact-retreaty)

##### Publishing (PactJS)

##### Provider Verification (PactJS)

### Provider

#### Scope of a Provider Pact Test

#### 1) Create the Order API

#### 2) Run provider verification