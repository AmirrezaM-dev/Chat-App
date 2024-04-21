const express = require("express")
const router = express.Router()
const {
	register,
	login,
	get,
	logout,
} = require("../controllers/userController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", [jsonWebTokenAndCsrfProtection], logout)
router.get("/get", [jsonWebTokenAndCsrfProtection], get)

module.exports = router
