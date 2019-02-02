const express = require("express");
const configMW = require("../configMiddleware/configMW.js");
// add routes here

const server = express();

configMW(server);
// server.use('./folder', requiredRoute)

server.get("/", (req, res) => {
    res.send("sanity check; server connected");
});

module.exports = server;
