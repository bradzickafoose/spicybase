exports.seed = function (knex) {
  return knex('permissions_roles').insert([
    {
      permission_id: 1,
      role_id: 1,
    },
    {
      permission_id: 2,
      role_id: 1,
    },
    {
      permission_id: 3,
      role_id: 1,
    },
    {
      permission_id: 4,
      role_id: 1,
    },
  ]);
};
