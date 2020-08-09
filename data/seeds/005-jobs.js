exports.seed = function (knex) {
  return knex('users').insert([
      // {
      //   client_id: 1,
      //   duration: 'Short-term or part-time work',
      //   category: 'telecommunications',
      //   specialty: 'IR tech',
      //   description: 'Deliverables. Type of technician or skills needed. Anything unique about the project.',
      //   project_type: 'One-time project',
      //   expertise: 'Answering Product Questions, Buried Service Wire Installation, Ticket Handling',
      //   technician_experience: 'Entry Level',
      //   location: 'Virginia, West Virginia',
      //   visibility: 'Anyone',
      //   people_needed: 3,
      //   talent_preference: 'Agency',
      //   language: 'English',
      //   budget: 'Pay a fixed price',
      //   length: '1 to 3 months',
      //   time_requirement: '30 units/week'
      // },
    ]);
  };
