# Node.js / Express.js / Handlebars

This example shows how to enable [page load backend correlation](https://docs.instana.io/products/website_monitoring/backendCorrelation/)
in order to link an end-users page load to a backend trace. Instana does this
[automatically for all newer browsers](https://caniuse.com/#feat=server-timing), but for older ones
we need to do some additional work.

## How To Try This Example?

```
git clone https://github.com/instana/website-monitoring-examples.git
cd website-monitoring-examples/examples/page-load-backend-correlation/node-js-express-js-handlebars
npm install
npm start
open http://localhost:3000
```

## Where Are The Important Parts?

 - The Node.js process is using the [Instana Node.js collector](https://docs.instana.io/ecosystem/node-js/).
 - The website monitoring snippet is added to `index.hbs`.
 - The trace ID is received in `index.js` and passed to the template engine for inclusion in the HTML file.
 - `req.headers["x-instana-t"]` is added automatically by the Instana Node.js collector when tracing HTTP calls.

## TLDR

```javascript
require("@instana/collector")();

…

app.get("/", (req, res) =>
  res.send(
    template({
      traceId: req.headers["x-instana-t"]
    })
  )
);

…

ineum('traceId', '{{traceId}}');
```
