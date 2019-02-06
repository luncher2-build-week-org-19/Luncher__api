const db = require("../dbConfig.js");

module.exports = {
    getAllDonated,
    getDonatedById,
    getDonationByUserId,
    addDonationAmount,
};

function addDonationAmount(id, info, user) {
    let donatedAmount = {
        amount: info.amount,
        userId: user.id,
        donationId: id,
    };

    console.log(donatedAmount);
    return db("donationsReceived").insert(donatedAmount);
}

function getDonationByUserId(id) {
    const donated = db("donationsReceived").where({ userId: id });
    const users = db("users")
        .select("id", "firstName", "lastName", "username", "email")
        .where({ id: id });

    return Promise.all([donated, users]).then(res => {
        return res;
    });
}

function getDonatedById(id) {
    const donated = db("donationsReceived").where({ donationId: id });
    const users = db("users").select("id", "username");

    return Promise.all([donated, users]).then(res => {
        let total = 0;

        for (let i = 0; i < res[0].length; i++) {
            total += res[0][i].amount;
            for (let z = 0; z < res[1].length; z++) {
                if (res[0][i].userId === res[1][z].id) {
                    res[0][i] = {
                        ...res[0][i],
                        username: res[1][z].username,
                    };
                }
            }
        }

        [res] = res;

        return { res, totalReceived: total };
    });
}

function getAllDonated() {
    const donated = db("donationsReceived");
    const users = db("users").select("id", "username");

    return Promise.all([donated, users]).then(res => {
        for (let i = 0; i < res[0].length; i++) {
            for (let z = 0; z < res[1].length; z++) {
                if (res[0][i].userId === res[1][z].id) {
                    res[0][i] = {
                        ...res[0][i],
                        username: res[1][z].username,
                    };
                }
            }
        }

        [res] = res;

        return res;
    });
}
