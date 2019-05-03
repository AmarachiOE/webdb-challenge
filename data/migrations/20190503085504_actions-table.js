exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();

    // for project_id foreign key
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.string("name", 128).notNullable();
    tbl.string("description").notNullable();
    tbl.string("notes").notNullable();
    tbl
      .boolean("complete")
      .defaultTo(false)
      .notNullable(); // since there's a default notNullable doesn't really have to be here but okay
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
