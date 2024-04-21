const jwt = require("jsonwebtoken")
const csrf = require("csrf")()
const User = require("../models/userModel")
const Token = require("../models/tokenModel")
const cookie = require("cookie")
const socketAuthMiddleware = async (socket, next) => {
	socket.cookies = cookie.parse(socket.request.headers.cookie)
	const errorHandler = (error) => {
		console.log("Socket Error :", error)
		next(new Error(error))
	}
	if (
		!socket.cookies.lt ||
		!socket.request.headers.authorization ||
		!socket.request.headers.authorization.startsWith("Bearer")
	) {
		errorHandler("Bad credentials")
	} else
		try {
			const loginToken = socket.cookies.lt
			const csrfToken = socket.request.headers.authorization.split(" ")[1]
			const decoded = jwt.verify(loginToken, "abc123")
			socket.user = await User.findOneAndUpdate(
				{ _id: decoded.id },
				{ socketID: socket.id, isConnected: true },
				{
					returnOriginal: false,
				}
			).select("-password")
			socket.user = await User.findById(decoded.id).select("-password")
			const csrfSecret = await Token.findOne({
				user: socket.user.id,
				active: true,
				lt: loginToken,
			}).select("cs")
			if (csrfSecret?.cs && csrf.verify(csrfSecret.cs, csrfToken)) {
				next()
			} else {
				errorHandler("Bad credentials")
			}
		} catch (error) {
			errorHandler("Bad credentials")
		}
}
module.exports = { socketAuthMiddleware }
