const mongoose = require("mongoose")
const messageSchema = mongoose.Schema(
	{
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		receiver: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		text: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			// message
			// file
		},
		isForwarding: {
			type: Boolean,
		},
		replyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model("Message", messageSchema)
