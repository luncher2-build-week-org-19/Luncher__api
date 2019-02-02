const db = require("../dbConfig.js");

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
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
