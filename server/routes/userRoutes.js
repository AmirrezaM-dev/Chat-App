const express = require("express")
const router = express.Router()
const {
	register,
	login,
	get,
	logout,
	saveProfile,
	savePassword,
} = require("../controllers/userController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", [jsonWebTokenAndCsrfProtection], logout)
router.post("/saveProfile", [jsonWebTokenAndCsrfProtection], saveProfile)
router.post("/savePassword", [jsonWebTokenAndCsrfProtection], savePassword)
router.get("/get", [jsonWebTokenAndCsrfProtection], get)

module.exports = router
