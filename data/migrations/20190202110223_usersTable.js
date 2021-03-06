exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("firstName", 128);
        tbl.string("lastName", 128);
        tbl.string("userRole", 128).notNullable();
        tbl.string("username", 128)
            .unique("username")
            .notNullable();
        tbl.string("email", 128)
            .unique("email")
            .notNullable();
        tbl.string("password", 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
