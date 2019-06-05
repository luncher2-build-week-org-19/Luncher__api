exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("donationsNeeded")
        // .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("donationsNeeded").insert([
                {
                    title: "No Kid Starving",
                    description:
                        "Give the gift of food to children and help them become all that they can become!",
                    amount: 5000,
                    userId: 1,
                    schoolId: 6,
                },
                {
                    title: "Food for Thought",
                    description: "Why isn't a group of squid called a squad?",
                    amount: 3000,
                    userId: 1,
                    schoolId: 1,
                },
                {
                    title: "Healthy Breakfasts",
                    description:
                        "Help provide the necessary caloric intake of some of our youngest students.",
                    amount: 2500,
                    userId: 2,
                    schoolId: 2,
                },
                {
                    title: "State Spelling Bee Champs",
                    description:
                        "Help make the celebration of this great achievment a memorable one.",
                    amount: 900,
                    userId: 2,
                    schoolId: 2,
                },
            ]);
        });
};
