const express = require("express")
const router = express.Router()
const {
	getChatsAndContacts,
	getMessages,
	editMessage,
} = require("../controllers/messageController")
const {
	jsonWebTokenAndCsrfProtection,
} = require("../middlewares/authMiddleware")

router.get(
	"/getChatsAndContacts",
	[jsonWebTokenAndCsrfProtection],
	getChatsAndContacts
)
router.post("/editMessage", [jsonWebTokenAndCsrfProtection], editMessage)
router.post("/getMessages", [jsonWebTokenAndCsrfProtection], getMessages)

module.exports = router
