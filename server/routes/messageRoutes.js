const express = require("express")
const router = express.Router()
const {
	getChatsAndContacts,
	getMessages,
} = require("../controllers/messageController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.get(
	"/getChatsAndContacts",
	[jsonWebTokenAndCsrfProtection],
	getChatsAndContacts
)
router.post("/getMessages", [jsonWebTokenAndCsrfProtection], getMessages)

module.exports = router
