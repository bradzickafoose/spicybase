exports.seed = function (knex) {
	return knex('jobs').insert([
		{
			title: 'Copper I&R Techs Needed!',
			description: "Sims Utility Services needs a Copper I&R Tech to work trouble tickets and service orders.",
			location: 'Austin, TX',
			job_category_id: 2,
			created_by: 1,
			updated_by: 2
		}
	]);
};
