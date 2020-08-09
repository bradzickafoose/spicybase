exports.seed = function (knex) {
  return knex('roles').insert([
    {
      id: 1,
      name: process.env.ROLE,
    },
    {
      id: 2,
      name: 'admin',
    },
    {
      id: 3,
      name: 'client',
    },
    {
      id: 4,
      name: 'talent',
    },
  ]);
};
