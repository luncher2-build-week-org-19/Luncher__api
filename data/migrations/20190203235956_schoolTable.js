exports.up = function(knex, Promise) {
    return knex.schema.createTable("schools", tbl => {
        tbl.increments();
        tbl.text("image").defaultTo(
            "https://i.pinimg.com/originals/ca/2f/19/ca2f19b5c0a37481a3a731a629fc2346.png"
        );
        tbl.string("schoolname", 255)
            .unique("schoolname")
            .notNullable();
        tbl.integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.string("state", 128)
            .notNullable();
        tbl.string("level", 128)
            .notNullable();
        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("schools");
};
