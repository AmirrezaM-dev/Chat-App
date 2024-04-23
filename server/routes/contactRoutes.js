const express = require("express")
const router = express.Router()
const { add, remove } = require("../controllers/contactController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.post("/add", [jsonWebTokenAndCsrfProtection], add)
router.post("/remove", [jsonWebTokenAndCsrfProtection], remove)

module.exports = router
