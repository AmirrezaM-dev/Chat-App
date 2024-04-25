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
			default: "message",
			// message
			// file
		},
		isForwarded: {
			type: Boolean,
			default: false,
		},
		isEdited: {
			type: Boolean,
			default: false,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		isSenderDeleted: {
			type: Boolean,
			default: false,
		},
		isReceiverDeleted: {
			type: Boolean,
			default: false,
		},
		replyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
		status: {
			type: String,
			default: "unread",
		},
	},
	{ timestamps: true }
)

messageSchema.index({ text: 1 })
module.exports = mongoose.model("Message", messageSchema)
