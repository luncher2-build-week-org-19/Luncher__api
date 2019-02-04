const db = require("../dbConfig.js");

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    getAllUsers,
    updateUser,
    deleteUser,
};

function registerUser(user) {
    return db("users").insert(user);
}

function loginUser(user) {
    return db("users")
        .where({ username: user.userName })
        .first();
}

function getAllUsers() {
    return db("users").select(
        "id",
        "userName",
        "email",
        "firstName",
        "lastName",
        "userRole"
    );
}

function getUserInfo(user) {
    console.log(user);
    return db("users")
        .select("id", "userName", "email", "firstName", "lastName", "userRole")
        .where({ username: user.username });
}

function updateUser(user, updateInfo) {
    return db("users")
        .where("id", user.id)
        .update(updateInfo);
}

function deleteUser(user) {
    return db("users")
        .where({ username: user.username })
        .del();
}
