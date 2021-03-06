exports.up = function(knex, Promise) {
    return knex.schema.createTable("donationsNeeded", tbl => {
        tbl.increments();
        tbl.string("title", 255).notNullable();
        tbl.text("description");
        tbl.integer("amount").notNullable();
        tbl.integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("schoolId")
            .unsigned()
            .references("id")
            .inTable("schools")
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("donationsNeeded");
};
