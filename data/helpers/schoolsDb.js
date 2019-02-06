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
    const schoolDeleted = db("schools")
        .where({ id: id })
        .del();

    const donationsDeleted = db("donationsNeeded")
        .where({ schoolId: id })
        .del();

    return Promise.all([schoolDeleted, donationsDeleted]).then(res => {
        console.log(res);
        return res[0];
    });
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
