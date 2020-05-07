# Self-Hosted/On-Premises Monitoring Endpoint Reverse Proxy: NGINX

This example shows how to use NGINX as a reverse proxy for the Self-Hosted/On-Premise
end-user monitoring endpoint. The example starts NGINX within a Docker container.

## Usage

### Check out the Example

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/reverse-proxy/nginx
```

### Start the Reverse Proxy in a Docker Container

```
./run.bash
```

### Make a Test Call

```
curl -v http://localhost:8080
```

## Adaption for Deployments

The `nginx.conf` is a sensible starting point. It contains `TODO`s to indicate
spots that require modifications for production deployments.