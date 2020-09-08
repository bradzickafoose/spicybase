exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 30).unique();
    tbl.string('first_name', 128);
    tbl.string('last_name', 128);
    tbl.string('email', 90).notNullable().unique();
    tbl.string('password', 70).notNullable();
    tbl.string('primary_phone', 10);
    tbl.string('alt_phone', 10);
    tbl.string('profile_image', 500);
    tbl.date('birthday');
    tbl.string('location', 200);
    tbl.string('address_street', 128);
    tbl.string('address_optional', 128);
    tbl.string('address_city', 128);
    tbl.string('address_state', 70);
    tbl.string('address_zip', 16);
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.integer('role_id').notNullable().unsigned().references('roles.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
