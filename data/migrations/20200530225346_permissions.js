exports.up = function (knex) {
  return knex.schema.createTable('permissions', (tbl) => {
    tbl.increments();
    tbl.string('scope', 128).notNullable().unique();
    tbl.string('description', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('permissions');
};