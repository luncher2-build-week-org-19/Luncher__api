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
const schoolsRoute = require("../data/routes/schools/schoolsRouter.js");

const server = express();

server.use(helmet());
server.use(morgan("short"));
server.use(express.json());
server.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

// server.use('./folder', requiredRoute)
server.use("/users", usersRoute);
server.use("/schools", schoolsRoute);

server.get("/", (req, res) => {
    res.send("sanity check; server connected");
});

module.exports = server;
