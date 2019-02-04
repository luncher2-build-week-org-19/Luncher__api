const db = require("../dbConfig.js");

module.exports = {
    getAll,
    getById,
    // getByUserId,
    // getBySchoolId,
    // addNewDonation,
    // updateDonation,
    // deleteDonation,
};

function getById(id) {
    return db("donationsNeeded").where({ id: id });
}

function getAll() {
    return db("donationsNeeded");
}
