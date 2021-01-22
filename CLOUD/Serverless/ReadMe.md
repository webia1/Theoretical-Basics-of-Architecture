# Serverless

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Serverless means](#serverless-means)
  - [Technically](#technically)
  - [Marketing](#marketing)
- [Concepts & Ideas](#concepts-ideas)
  - [Lambda Overview](#lambda-overview)
    - [Lambda handles](#lambda-handles)
    - [Lambda Functions can be written with or via](#lambda-functions-can-be-written-with-or-via)
    - [AWS Lambda](#aws-lambda)
      - [Author from strach](#author-from-strach)

<!-- /code_chunk_output -->

## Serverless means

### Technically

- No servers to provision or manage
- Scales with usage
- Pay for value
- Availability and fault tolerance built in

### Marketing

- Greater agility
- Less overhead
- Better Focus
- Increased scale
- More flexibility
- Faster time to market

## Concepts & Ideas

### Lambda Overview

- Event-driven compute
  - Function as a service
    - Serverless FaaS &larr; Lambda

Event Source &rarr; Function &rarr; Services etc.

#### Lambda handles

- Load Balancing
- Auto scaling
- Handling failures
- Security Isolation
- OS Management
- Managing Utilization
- ..and many other things

#### Lambda Functions can be written with or via

- NodeJS
- Python
- Java
- C#
- Go/Rust
- Ruby
- Runtime API
- ..new things are coming

#### AWS Lambda

- AWS Services &rarr; Lambda
- Create Function
  - Author from strach
  - Blue prints
  - AWS Serverless Application Repository

##### Author from strach

- Name
- Runtime (e.g. NodeJS/Python)
- Role
- Policy templates (optional)
