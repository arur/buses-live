"use strict";
const express = require("express");
const https = require("https");
const path = require('path');
const util = require("util");
const debug = util.debuglog("server");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const TRANSLINK_KEY = process.env.TRANSLINK_KEY || "";
const API_OPTIONS = {
  hostname: "api.translink.ca",
  path: `/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}`,
  headers: {
    Accept: "application/JSON"
  }
};

app.get("/api/buses", (request, response) => {
  let data = "";
  const req = https.request(API_OPTIONS, res => {
    res.setEncoding("utf8");
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("Translink data received");
      response.set("Content-Type", "application/json");
      response.status(res.statusCode);
      response.send(data);
    });
  });
  req.on("error", err => {
    debug(err);
    response.status(500);
    response.send("Internal server error");
  });
  req.end();
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
