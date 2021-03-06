const db = require("../dbConfig.js");

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

function registerUser(user) {
    user.userRole = user.userRole.toLowerCase();
    return db("users").insert(user);
}

function loginUser(user) {
    return db("users")
        .where({ username: user.userName })
        .first();
}

function getAllUsers() {
    return db("users").select("id", "userName", "firstName", "lastName");
}

function getUserInfo(user) {
    console.log(user);
    return db("users")
        .select("id", "userName", "email", "firstName", "lastName", "userRole")
        .where({ username: user.username });
}

function getUserById(id) {
    return db("users")
        .select("id", "userName", "firstName", "lastName", "userRole")
        .where({ id: id })
        .first();
}

function updateUser(user, updateInfo) {
    return db("users")
        .where("id", user.id)
        .update(updateInfo);
}

function deleteUser(user) {
    const userDelete = db("users")
        .where({ username: user.username })
        .del();

    const donationDelete = db("donationsNeeded")
        .where({ userId: user.id })
        .del();

    return Promise.all([userDelete, donationDelete]).then(res => {
        console.log(res);
        return res[0];
    });
}
