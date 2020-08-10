const {hashSync} = require('bcrypt');

exports.seed = function (knex) {
	return knex('users').insert([
		{
			role_id: 2,
			username: 'adminzappa',
			first_name: 'Admin',
			last_name: 'Zappa',
			email: 'admin@test.com',
			password: hashSync('testing123', 12),
			primary_phone: '4004004000',
		},
		{
			role_id: 3,
			username: 'bobiger',
			first_name: 'Bob',
			last_name: 'Iger',
			email: 'bob@igerutility.com',
			password: hashSync('testing123', 12),
			primary_phone: '7147814636',
			alt_phone: '7149990990',
			birthday: '1951-02-10'
		},
		{
			role_id: 4,
			username: 'cardwalker',
			first_name: 'Card',
			last_name: 'Walker',
			email: 'cwalker@gmail.com',
			password: hashSync('testing123', 12),
			primary_phone: '8008008000',
			alt_phone: '3049863430',
			profile_image: '',
			birthday: '1916-01-09',
			location: 'Orlando, FL',
			address_street: '200 Epcot Center Drive',
			address_optional: '',
			address_city: 'Orlando',
			address_state: 'FL',
			address_zip: '32821',
		},
		{
			role_id: 4,
			username: 'nrojanasupya',
			first_name: 'Nattajohn',
			last_name: 'Rojanasupya',
			email: 'nate@test.com',
			password: hashSync('testing123', 12),
			primary_phone: '5623169560',
			birthday: '1996-03-05',
		}
	]);
};
