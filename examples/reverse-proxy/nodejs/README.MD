# Self-Hosted/On-Premises Monitoring Endpoint Reverse Proxy: NODEJS

This example shows how to create a simple Nodejs application as a reverse proxy for the Self-Hosted/On-Premise
end-user monitoring endpoint. The example starts Nodejs within a Docker container. Example implementation is
based on https://github.com/http-party/node-http-proxy

## Usage

### Check out the Example

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/forwarding-proxy/nodejs
```

### Start the Reverse Proxy in a Docker Container

```
./run.bash
```

### Make a Test Call

```
curl -vv -x http://127.0.0.1:8080 http://instana-backend/
```

## Adaption for Deployments

The `server.js` is a sensible starting point. It contains `TODO`s to indicate
spots that require modifications for production deployments.
