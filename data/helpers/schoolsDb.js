const db = require("../dbConfig.js");

module.exports = {
    getAllSchools,
    getSchoolById,
    // getSchoolByUserId,
    // addSchool,
    // updateSchool,
    // deleteSchool,
};

function getSchoolById(id) {
    return db("schools").where({ id: id });
}

function getAllSchools() {
    return db("schools").select();
}
