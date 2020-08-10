
exports.up = function (knex) {
	return knex.schema.createTable('job_categories', (tbl) => {
		tbl.increments();
		tbl.string('name').notNullable();
	})
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('job_categories');
};
