exports.seed = function (knex) {
  return knex("instructions").insert([
    {
      recipe_id: 1,
      instructions: "solve prime number theory",
    },
    {
      recipe_id: 3,
      instructions: "blackmail world leaders",
    },
    {
      recipe_id: 1,
      instructions: "collect all the sheep in Scotland",
    },
    {
      recipe_id: 2,
      instructions: "find Japanese investors",
    },
    {
      recipe_id: 4,
      instructions: "smash it with a hammer (evil laugh)",
    },
    {
      recipe_id: 1,
      instructions: "turn your enemy into a flea",
    },
    {
      recipe_id: 3,
      instructions: "mail the box to yourself and when it arrives...",
    },
    {
      recipe_id: 1,
      instructions: "write a bot to randomly like posts and follow pages",
    },
    {
      recipe_id: 3,
      instructions:
        "try to ignore the persisent feeling of loneliness and disconnection",
    },
    {
      recipe_id: 2,
      instructions: "watch instagram followers increase",
    },
    {
      recipe_id: 4,
      instructions: "...and quest some more",
    },
    {
      recipe_id: 4,
      instructions: "seamlessly take their place",
    },
    {
      recipe_id: 3,
      instructions: "artfully craft accessories",
    },
    {
      recipe_id: 1,
      instructions: "steal coworker's name tag",
    },
  ]);
};