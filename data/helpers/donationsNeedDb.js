const db = require("../dbConfig.js");

module.exports = {
    getAll,
    // getById,
    // getByUserId,
    // getBySchoolId,
    // addNewDonation,
    // updateDonation,
    // deleteDonation,
};

function getAll() {
    return db("donationsNeeded");
}
