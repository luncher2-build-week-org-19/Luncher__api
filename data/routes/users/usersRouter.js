const { express, bcrypt } = require("../../../configMiddleware/configMW.js");
const db = require("../../dbConfig.js");
const { genToken } = require("../../middleware/generateToken.js");
// const
const router = express.Router();

module.exports = router;
