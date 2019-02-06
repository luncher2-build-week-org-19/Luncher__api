exports.up = function(knex, Promise) {
    return knex.schema.createTable("donationsReceived", tbl => {
        tbl.increments();
        tbl.decimal("amount").notNullable();
        tbl.integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .notNullable();
        tbl.integer("donationId")
            .unsigned()
            .references("id")
            .inTable("donationsNeeded")
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("donationsReceived");
};
