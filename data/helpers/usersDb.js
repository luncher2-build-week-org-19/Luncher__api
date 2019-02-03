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

function getUsers(user) {
    return db("users")
        .select("id", "userName", "email", "firstName", "lastName", "userRole")
        .where({ username: user.username });
}
