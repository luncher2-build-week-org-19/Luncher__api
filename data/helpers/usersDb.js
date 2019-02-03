const db = require("../dbConfig.js");

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    getAllUsers,
    updateUser,
};

function registerUser(user) {
    return db("users").insert(user);
}

function loginUser(user) {
    return db("users")
        .where({ userName: user.userName })
        .first();
}

// function getUserInfo(user) {
//     return db("users").where({ id: user.id });
// }
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
    return db("users")
        .select("id", "userName", "email", "firstName", "lastName", "userRole")
        .where({ username: user.username });
}

function updateUser(user) {
    return db("users")
        .update(user)
        .where({ id: user.id });
}
