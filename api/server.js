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

const corsOptions = {
    origin: "https://luncher-2-bw-19-lambda.herokuapp.com/",
    optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.options("*", cors());

server.use(helmet());
server.use(morgan("short"));
server.use(express.json());

// server.use(cors());

// server.use('/apiUrl', requiredRoute)
server.use("/users", usersRoute);
server.use("/schools", schoolsRoute);

server.get("/", (req, res) => {
    res.send("sanity check; server connected");
});

module.exports = server;
