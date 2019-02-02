const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(morgan("short"));
    server.use(
        cors({
            credentials: true,
            origin: "http://localhost:3000",
        })
    );
    bcrypt, jwt;
};
