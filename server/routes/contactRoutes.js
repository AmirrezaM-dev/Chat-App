const express = require("express")
const router = express.Router()
const { add, remove, block } = require("../controllers/contactController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.post("/add", [jsonWebTokenAndCsrfProtection], add)
router.post("/remove", [jsonWebTokenAndCsrfProtection], remove)
router.post("/block", [jsonWebTokenAndCsrfProtection], block)

module.exports = router
