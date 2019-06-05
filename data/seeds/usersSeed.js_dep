const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("users")
        // .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("users").insert([
                {
                    firstName: "Gob",
                    lastName: "Bluth",
                    userRole: "admin",
                    username: "Illusions",
                    email: "gBluth@test.com",
                    password: bcrypt.hashSync("secretPass", 14)
                },
                {
                    firstName: "Michael",
                    lastName: "Bluth",
                    userRole: "admin",
                    username: "Staircar",
                    email: "Bluthbrothers@test.com",
                    password: bcrypt.hashSync("secretPass", 14)
                },
                {
                    firstName: "",
                    lastName: "",
                    userRole: "patron",
                    username: "Maybie",
                    email: "Movieexec@test.com",
                    password: bcrypt.hashSync("secretPass", 14)
                },
                {
                    firstName: "George",
                    lastName: "",
                    userRole: "patron",
                    username: "sUpErBaD",
                    email: "cera@test.com",
                    password: bcrypt.hashSync("secretPass", 14)
                },
            ]);
        });
};
