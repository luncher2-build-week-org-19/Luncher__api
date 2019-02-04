const { express } = require("../../../configMiddleware/configMW.js");
const { protected } = require("../../middleware/protectedMW");

const schoolDb = require("../../helpers/schoolsDb.js");
const router = express.Router();

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
