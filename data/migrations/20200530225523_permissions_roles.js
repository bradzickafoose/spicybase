exports.up = function (knex) {
  return knex.schema.createTable('permissions_roles', (tbl) => {
    tbl.integer('role_id').notNullable().unsigned().references('roles.id');
    tbl.integer('permission_id').notNullable().unsigned().references('permissions.id');
    tbl.primary(['role_id', 'permission_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('permissions_roles');
};
