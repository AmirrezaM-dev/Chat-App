const express = require("express")
const router = express.Router()
const {
	getChatsAndContacts,
	getMessages,
	deleteMessage,
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
router.post("/deleteMessage", [jsonWebTokenAndCsrfProtection], deleteMessage)
router.post("/getMessages", [jsonWebTokenAndCsrfProtection], getMessages)

module.exports = router
