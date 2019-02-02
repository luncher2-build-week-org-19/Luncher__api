const db = require("../dbConfig.js");

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    getUsers,
};

function registerUser(user) {
    return db("users").insert(user);
}

function loginUser(user) {
    return db("users")
        .where({ userName: user.userName })
        .first();
}

function getUserInfo(user) {
    return db("users").where({ id: user.id });
}

function getUsers() {
    return db("users").select("id", "userName", "userRole", "email");
}
