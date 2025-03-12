const exoress = require("express")
const handleMatDetails = require("../controllers/matDetailsController")
const router = exoress.Router()

router.post("/matDetails", handleMatDetails)

module.exports = router