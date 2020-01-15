require("@instana/collector")();

const Handlebars = require("handlebars");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

const template = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, "index.hbs"), {
    encoding: "utf8"
  })
);

app.get("/", (req, res) =>
  res.send(
    template({
      traceId: req.headers["x-instana-t"]
    })
  )
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
