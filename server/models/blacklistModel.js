const mongoose = require("mongoose")
const blacklistSchema = mongoose.Schema(
	{
		relatedUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		blacklistUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model("Blacklist", blacklistSchema)
