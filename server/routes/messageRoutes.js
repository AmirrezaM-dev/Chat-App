const express = require("express")
const router = express.Router()
const { getChats, getMessages } = require("../controllers/messageController")
const { jwtCP, csrfP } = require("../middlewares/authMiddleware")

router.get("/getChats", [jwtCP, csrfP], getChats)
router.post("/getMessages", [jwtCP, csrfP], getMessages)

module.exports = router
