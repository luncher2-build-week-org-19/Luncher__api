const { express } = require("../../../configMiddleware/configMW.js");
const { protected } = require("../../middleware/protectedMW");

const donationDb = require("../../helpers/donationsNeedDb.js");
const router = express.Router();

router.get("/all", (req, res) => {
    donationDb
        .getAll()
        .then(donations => {
            res.status(200).json(donations);
        })
        .catch(err => {
            res.status(500).json({
                err,
                error: "Failed to return all donation needs",
            });
        });
});

module.exports = router;
