exports.up = function (knex) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('roles');
};
