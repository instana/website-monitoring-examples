#!/usr/bin/env bash

set -eo pipefail

docker build -t on-prem-monitoring-endpoint-proxy .

docker run \
  --rm \
  --name on-prem-monitoring-endpoint-proxy \
  -p 8080:80 \
  on-prem-monitoring-endpoint-proxy