# Serverless

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Serverless means](#serverless-means)
  - [Technically](#technically)
  - [Marketing](#marketing)
- [Concepts & Ideas (Excerpts / AWS)](#concepts-ideas-excerpts-aws)
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

## Concepts & Ideas (Excerpts / AWS)

- AWS Compute and Analytics Services
  - EC2 Elastic Compute Cloud
  - Auto Scaling
  - Lambda
  - ELB Elastic Load Balancer
  - ECS Elastic Container Service
  - EMR Elastic Mapreduce (Hadoop & Co.)
  - Kinesis Realtime data/video streaming
  - Athena Interactive Query Engine
  - QuickSight - Business Intelligence
  - Glue - Fully managed ETL (extract, transform, and load) service
- AWS Storage and Database Services
  - EBS Elastic Block Storage
  - Simple Storage Service
  - EFS Elastic File System
  - RDS Relational Database Service
  - DynamoDB - AWS NoSQL Database
  - Redshift - Data Warehousing
  - Elastic Cache
- AWS Network and Management Services
  - VPC Virtual Private Cloud
  - Route 53 - AWS DNS Service
  - Direct Connect - Dedicated Network
  - Cloud Front - Content Delivery Network
  - Cloud Watch - Monitoring
  - Cloud Formation - Provision Infrastructure as Code
  - Elastic Beanstalk - Application Orchestration Service
  - Opsworks - Insfrastructure Configuration Management
- AWS Application and Development Sercices
  - API Gateway - REST & Websockets API
  - SQS - Simple Que Service
  - SNS - Simple Notification Service
  - SES - Simple Email Service
  - Cognito - User Management for Web
  - Code Commit - GIT bei AWS
  - Code Build - Continuous Integration Service
  - Code Deploy - Automated Deployments
  - Code Pipeline - Continuous Delivery Service
  - Code Star - Creating, managing, and working with deployments

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
