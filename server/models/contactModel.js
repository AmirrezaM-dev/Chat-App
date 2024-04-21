const mongoose = require("mongoose")
const contactSchema = mongoose.Schema(
	{
		relatedUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		contactUser: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model("Contact", contactSchema)
