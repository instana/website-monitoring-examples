var http = require('http'),
    httpProxy = require('http-proxy'),
    net = require('net'),
    url = require('url');

//TODO adjust proxy port and Instana target url configuration
var target = 'http://instana-backend:2999/'
var proxy_listen_port = 8080;

var proxy = new httpProxy.createProxyServer();
http.createServer(function (req, res) {
  setTimeout(function () {
    proxy.web(req, res, {
      target: target
    });
  }, 200);
}).listen(proxy_listen_port);
