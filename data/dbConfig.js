const knex = require("knex");
const knexConfig = require("../knexfile.js");
require('dotenv').config();

const environment = process.eventNames.DB_ENV || 'development';

module.exports = knex(knexConfig[environment]);
