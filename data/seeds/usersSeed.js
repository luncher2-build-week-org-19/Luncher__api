exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("users")
        .then(function() {
            // Inserts seed entries
            return knex("users").insert([
                {
                    firstName: "Gob",
                    lastName: "Bluth",
                    userRole: "admin",
                    username: "Illusions",
                    email: "gBluth@test.com",
                    password: "secretPass",
                },
                {
                    firstName: "Michael",
                    lastName: "Bluth",
                    userRole: "admin",
                    username: "Staircar",
                    email: "Bluthbrothers@test.com",
                    password: "secretPass",
                },
                {
                    firstName: "",
                    lastName: "",
                    userRole: "patron",
                    username: "Maybie",
                    email: "Movieexec@test.com",
                    password: "secretPass",
                },
                {
                    firstName: "George",
                    lastName: "",
                    userRole: "patron",
                    username: "sUpErBaD",
                    email: "cera@test.com",
                    password: "",
                },
            ]);
        });
};
