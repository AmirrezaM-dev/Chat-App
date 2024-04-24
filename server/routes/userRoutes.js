const express = require("express")
const router = express.Router()
const {
	register,
	login,
	get,
	logout,
	saveProfile,
	savePassword,
	changeAvatar,
} = require("../controllers/userController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

const multerMiddleware = require("../middlewares/multerMiddleware")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", [jsonWebTokenAndCsrfProtection], logout)
router.post("/saveProfile", [jsonWebTokenAndCsrfProtection], saveProfile)
router.post("/savePassword", [jsonWebTokenAndCsrfProtection], savePassword)
router.post(
	"/changeAvatar",
	[jsonWebTokenAndCsrfProtection, multerMiddleware],
	changeAvatar
)
router.get("/get", [jsonWebTokenAndCsrfProtection], get)

module.exports = router
