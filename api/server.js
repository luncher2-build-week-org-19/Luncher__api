require("dotenv").config();
// const express = require("express");
const {
    cors,
    helmet,
    morgan,
    express,
} = require("../configMiddleware/configMW.js");

// add routes here
const usersRoute = require("../data/routes/users/usersRouter.js");

const server = express();

server.use(helmet());
server.use(morgan("short"));
server.use(express.json());
server.use(cors());

// server.use('./folder', requiredRoute)
server.use("/users", usersRoute);

server.get("/", (req, res) => {
    res.send("sanity check; server connected");
});

module.exports = server;
