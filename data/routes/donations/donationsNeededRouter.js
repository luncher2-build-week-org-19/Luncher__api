const { express } = require("../../../configMiddleware/configMW.js");
const { protected } = require("../../middleware/protectedMW");

const donationDb = require("../../helpers/donationsNeedDb.js");
const router = express.Router();

router.delete("/delete/:id", protected, (req, res) => {
    const id = req.params.id;

    donationDb
        .deleteDonation(id, req.decodedToken)
        .then(result => {
            if (result === 1) {
                res.status(200).json(result);
            } else {
                res.status(401).json({
                    message: "No authorization to delete this donationInfo",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.put("/update/:id", protected, (req, res) => {
    const id = req.params.id;
    const donationInfo = req.body;

    donationDb
        .updateDonation(id, req.decodedToken, donationInfo)
        .then(result => {
            if (result === 1) {
                res.status(200).json(result);
            } else {
                res.status(401).json({
                    result,
                    message: "No authorization to update this donationInfo",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.post("/schools/:id", protected, (req, res) => {
    const id = req.params.id;
    const donationInfo = req.body;

    console.log(id, req.decodedToken, donationInfo);

    donationDb
        .addNewDonation(id, req.decodedToken, donationInfo)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/schools/:id", (req, res) => {
    const id = req.params.id;

    donationDb
        .getBySchoolId(id)
        .then(donations => {
            if (donations.length !== 0) {
                res.status(200).json(donations);
            } else {
                res.status(404).json({
                    message: "Donations with that schoolID could not be found",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/users/:id", (req, res) => {
    const id = req.params.id;

    donationDb
        .getByUserId(id)
        .then(donations => {
            if (donations.length !== 0) {
                res.status(200).json(donations);
            } else {
                res.status(404).json({
                    message: "Donations with that userID could not be found",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/all", (req, res) => {
    donationDb
        .getAll()
        .then(donations => {
            res.status(200).json(donations);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    donationDb
        .getById(id)
        .then(donation => {
            console.log(donation);
            if (donation.length !== 0) {
                res.status(200).json(donation);
            } else {
                res.status(404).json({
                    message: "Donation not found with that id",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

module.exports = router;
