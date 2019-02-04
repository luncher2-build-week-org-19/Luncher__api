const { express } = require("../../../configMiddleware/configMW.js");
const { protected } = require("../../middleware/protectedMW");

const schoolDb = require("../../helpers/schoolsDb.js");
const router = express.Router();

router.put("/:id", protected, (req, res) => {
    const id = req.params.id;
    const schoolInfo = req.body;

    if (schoolInfo.schoolname) {
        schoolDb
            .updateSchool(id, schoolInfo)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    message: "Failed to update school info",
                });
            });
    } else {
        res.status(500).json({ message: "Provide school name" });
    }
});

router.post("/", protected, (req, res) => {
    const schoolInfo = req.body;
    // console.log(schoolInfo);
    schoolDb
        .addSchool(schoolInfo, req.decodedToken)
        .then(ids => {
            console.log(ids);
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({
                err,
                error: "Could not add new school, already exists",
            });
        });
});

router.get("/user/:id", (req, res) => {
    const id = req.params.id;
    schoolDb
        .getSchoolByUserId(id)
        .then(userSchools => {
            console.log(userSchools);
            if (userSchools) {
                res.status(200).json(userSchools);
            } else {
                res.status(404).json({
                    message: "Could not find school from that user",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    schoolDb
        .getSchoolById(id)
        .then(school => {
            console.log(school);
            if (school) {
                res.status(200).json(school);
            } else {
                res.status(404).json({
                    message: "School not found with that id",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/", (req, res) => {
    schoolDb
        .getAllSchools()
        .then(schools => {
            res.status(200).json(schools);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
