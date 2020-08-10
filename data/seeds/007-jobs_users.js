exports.seed = function (knex) {
	return knex('jobs_users').insert([
		{
			job_id: 1,
			user_id: 3
		},
		{
			job_id: 1,
			user_id: 4
		}
	]);
};
