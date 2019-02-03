const { express, bcrypt } = require("../../../configMiddleware/configMW.js");
// const db = require("../../dbConfig.js");
const { genToken } = require("../../middleware/generateToken.js");
const { protected } = require("../../middleware/protectedMW.js");

const userDb = require("../../helpers/usersDb.js");
const router = express.Router();

router.post("/register", (req, res) => {
    const creds = req.body;
    const hashedPassword = bcrypt.hashSync(creds.password, 14);
    creds.password = hashedPassword;

    userDb
        .registerUser(creds)
        .then(ids => {
            res.status(201).json({ ids });
        })
        .catch(err => {
            res.status(500), json(err, " -->  Registration failed");
        });
});

router.post("/login", (req, res) => {
    const creds = req.body;

    userDb
        .loginUser(creds)
        .then(user => {
            if (user && bcrypt.compareSync(creds.password, user.password)) {
                const token = genToken(user);
                res.status(200).json([
                    {
                        token,
                        id: user.id,
                        username: user.userName,
                        role: user.userRole,
                    },
                ]);
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
    userDb
        .updateUser(req.decodedToken)
        .then(ids => {
            console.log(ids);
            res.status(200).json(ids);
        })
        .catch(err => {
            res.status(500).json(err, "Failed to update user");
        });
});

// router.get("/", (req, res) => {
//     res.send("userRouter is connected");
// });

module.exports = router;
