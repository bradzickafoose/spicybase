exports.up = function (knex) {
  return knex.schema.createTable('jobs_users', tbl => {
    tbl.primary(['job_id', 'user_id']);
    tbl.integer('job_id').unsigned().notNullable().references('jobs.id');
    tbl.integer('user_id').unsigned().notNullable().references('users.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('jobs_users');
};
