const { jwt } = require("../../configMiddleware/configMW.js");

module.exports = {
    protected,
    checkRole,
};

function protected(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "invalid token" });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ error: "missing token" });
    }
}

function checkRole(userRole) {
    return function(req, res, next) {
        if (req.decodedToken.userRole.includes(userRole)) {
            next();
        } else {
            res.status(403).json({ message: "Not Authorized!" });
        }
    };
}
