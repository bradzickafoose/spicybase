exports.seed = function (knex) {
  return knex('permissions').insert([
    {
      id: 1,
      scope: 'write:users',
      description: 'Create new users',
    },
    {
      id: 2,
      scope: 'read:users',
      description: 'View users',
    },
    {
      id: 3,
      scope: 'write:listings',
      description: 'Create new job listings',
    },
    {
      id: 4,
      scope: 'read:listings',
      description: 'View job listings',
    },
  ]);
};
