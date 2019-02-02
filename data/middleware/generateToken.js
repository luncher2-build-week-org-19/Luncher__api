const { jwt } = require("../../configMiddleware/configMW.js");

module.exports = {
    genToken(user) {
        const payload = {
            username: user.userName,
            role: user.userRole,
        };
        const secret = process.env.JWT_SECRET;
        const options = {
            expiresIn: "1h",
        };

        return jwt.sign(payload, secret, options);
    },
};
