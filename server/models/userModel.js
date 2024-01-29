const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
	{
		fullname: {
			type: String,
			required: [true, "Please fill the fullname field"],
		},
		username: {
			type: String,
			unique: true,
		},
		avatar: {
			type: String,
		},
		email: {
			type: String,
			required: [true, "Please fill the email field"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please fill the password field"],
		},
		isConnected: {
			type: Boolean,
			default: false,
		},
		socketID: {
			type: String,
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model("User", userSchema)
