exports.seed = function (knex) {
	return knex('job_categories').insert([
		{name: 'Fiber'},
		{name: 'I&R'},
		{name: 'Buried Service Wire'}
	]);
};
