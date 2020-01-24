exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'World Domination' },
    { name: 'Get Rich Quick' },
    { name: 'Revenge' },
    { name: 'More Instagram Followers' },
    { name: 'Find the Holy Grail' },
    { name: 'Steal Coworker\'s Identity' }
  ]);
};