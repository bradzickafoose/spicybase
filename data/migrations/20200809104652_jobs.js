
exports.up = function (knex) {
	return knex.schema.createTable('jobs', (tbl) => {
		tbl.increments();
		tbl.timestamp('created_at').defaultTo(knex.fn.now());
		tbl.timestamp('updated_at').defaultTo(knex.fn.now());;

		tbl.string('title', 255).notNullable();
		tbl.string('description', 128).notNullable();
		tbl.string('location', 128).notNullable();

		tbl.integer('created_by').unsigned().notNullable().references('users.id');
		tbl.integer('updated_by').unsigned().notNullable().references('users.id');

		tbl.integer('job_category_id').unsigned().notNullable().references('job_categories.id');
	})
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('jobs');
};
