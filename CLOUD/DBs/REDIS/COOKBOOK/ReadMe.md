# Redis Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Install Redis on MacOS](#install-redis-on-macos)
- [Start Empty Redis Server](#start-empty-redis-server)

<!-- /code_chunk_output -->

## Install Redis on MacOS

    arch -arm64 brew install redis

## Start Empty Redis Server

    redis-server /opt/homebrew/etc/redis.conf
