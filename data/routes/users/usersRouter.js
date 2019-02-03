const { express, bcrypt } = require("../../../configMiddleware/configMW.js");
// const db = require("../../dbConfig.js");
const { genToken } = require("../../middleware/generateToken.js");
const { protected } = require("../../middleware/protectedMW.js");

const userDb = require("../../helpers/usersDb.js");
const router = express.Router();

router.post("/register", (req, res) => {
    const creds = req.body;
    if (creds.password) {
        const hashedPassword = bcrypt.hashSync(creds.password, 14);
        creds.password = hashedPassword;

        if (
            creds.firstName &&
            creds.lastName &&
            creds.userRole &&
            creds.userName &&
            creds.email
        ) {
            userDb
                .registerUser(creds)
                .then(ids => {
                    res.status(201).json(ids);
                })
                .catch(err => {
                    res.status(500).json({
                        err,
                        error: " -->  Registration failed",
                        message: " username and/or email already exists",
                    });
                });
        } else {
            res.status(500).json({ error: "All fields required to register" });
        }
    } else {
        res.status(500).json({ message: "Password required" });
    }
});

router.post("/login", (req, res) => {
    const creds = req.body;

    userDb
        .loginUser(creds)
        .then(user => {
            if (user && bcrypt.compareSync(creds.password, user.password)) {
                const token = genToken(user);
                res.status(200).json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.userRole,
                    },
                });
            } else {
                res.status(401).json({ message: "  --> Invalid login infor" });
            }
        })
        .catch(err => {
            res.status(500).json(err, { error: "  --> Login failed" });
        });
});

router.get("/", protected, (req, res) => {
    userDb
        .getUserInfo(req.decodedToken)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err, {
                error: "  --> Could not retrieve users",
            });
        });
});

router.get("/all", (req, res) => {
    userDb
        .getAllUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err, { error: "Failed to load users" });
        });
});

router.put("/update", protected, (req, res) => {
    const creds = req.body;
    const hashedPassword = bcrypt.hashSync(creds.password, 14);
    creds.password = hashedPassword;

    userDb
        .updateUser(req.decodedToken, creds)
        .then(ids => {
            console.log(ids);
            res.status(200).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err, error: "Failed to update user" });
        });
});

router.delete("/", protected, (req, res) => {
    userDb
        .deleteUser(req.decodedToken)
        .then(ids => {
            if (ids == 1) {
                res.status(200).json(ids);
            } else {
                res.status(404).json({ message: "User could not be found" });
            }
        })
        .catch(err => {
            res.status(500).json({ err, error: "Failed to delete user" });
        });
});

// router.get("/", (req, res) => {
//     res.send("userRouter is connected");
// });

module.exports = router;
