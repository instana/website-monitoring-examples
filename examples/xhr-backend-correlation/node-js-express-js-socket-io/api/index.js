require("@instana/collector")();

const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const port = 62000;
const app = express();
const http = require("http").createServer(app);

const corsMiddleware = cors({
  // This allows requests from all origins and might be potentially dangerous.
  // Refer to documentation of the CORS middleware to learn how to restrict
  // access to a subset of origins.
  // https://github.com/expressjs/cors#configuring-cors-w-dynamic-origin
  origin: true,
  credentials: true,
  preflightContinue: false
});

const io = require("socket.io")(http, {
  // Enable CORS support for socket.io
  handlePreflightRequest: (req, res) => corsMiddleware(req, res)
});

// Enable CORS support for regular HTTP calls
app.use("*", corsMiddleware);

app.all("/api/randomValues", (req, res) => res.send("A random value: " + Math.random()));

io.on("connection", socket => {
  socket.on("echo", msg => socket.emit("echo", msg));
});

http.listen(port, () => console.log(`App listening on port ${port}!`));
