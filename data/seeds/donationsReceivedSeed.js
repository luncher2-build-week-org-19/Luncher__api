exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("donationsReceived")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("donationsReceived").insert([
                { amount: 50.5, userId: 3, donationId: 1 },
                { amount: 25, userId: 1, donationId: 2 },
                { amount: 40.89, userId: 1, donationId: 3 },
                { amount: 10.25, userId: 3, donationId: 4 },
                { amount: 20, userId: 2, donationId: 2 },
                { amount: 15, userId: 4, donationId: 2 },
                { amount: 17.86, userId: 4, donationId: 4 },
                { amount: 5.6, userId: 2, donationId: 4 },
                { amount: 35.7, userId: 3, donationId: 1 },
                { amount: 22.25, userId: 1, donationId: 2 },
                { amount: 99, userId: 1, donationId: 4 },
                { amount: 13.89, userId: 3, donationId: 3 },
                { amount: 75, userId: 2, donationId: 3 },
                { amount: 23.22, userId: 4, donationId: 4 },
                { amount: 55, userId: 4, donationId: 4 },
                { amount: 36.12, userId: 2, donationId: 2 },
            ]);
        });
};
