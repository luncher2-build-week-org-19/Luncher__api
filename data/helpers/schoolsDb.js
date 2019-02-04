const db = require("../dbConfig.js");

module.exports = {
    getAllSchools,
    getSchoolById,
    getSchoolByUserId,
    addSchool,
    updateSchool,
    deleteSchool,
};

function deleteSchool(id) {
    return db("schools")
        .where({ id: id })
        .del();
}

function updateSchool(id, school) {
    return db("schools")
        .where({ id: id })
        .update(school);
}

function addSchool(school, user) {
    const newSchool = { ...school, userId: user.id };
    console.log(newSchool);
    return db("schools").insert(newSchool);
}

function getSchoolByUserId(id) {
    return db("schools").where({ userId: id });
}

function getSchoolById(id) {
    return db("schools").where({ id: id });
}

function getAllSchools() {
    return db("schools").select();
}
