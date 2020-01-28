require("@instana/collector")();

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 61000;

app.use(express.static("assets"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
