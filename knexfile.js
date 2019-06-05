// Update with your config settings.
require('dotenv').config();

const pg = require('pg');
pg.defaults.ssl = false;

const dbConnection = process.env.DATABASE_URL;

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data/luncher.db3",
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        useNullAsDefault: true,
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "PGl",
        connection: dbConnection,
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    },
};
