const expressAsyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Contact = require("../models/contactModel")

const add = expressAsyncHandler(async (req, res) => {
	const { username } = req.body
	const OtherUser = await User.findOne({ username })
	if (OtherUser && OtherUser._id.toString() !== req.user.id.toString()) {
		const contactExist = await Contact.findOne({
			contactUser: OtherUser._id,
		})
		if (!contactExist) {
			const relatedUser = req.user.id,
				contactUser = OtherUser._id
			const newContact = await Contact.create({
				relatedUser,
				contactUser,
			})
			res.status(200).json({
				_id: newContact._id,
				contactUser: [
					{
						_id: OtherUser._id,
						fullname: OtherUser.fullname,
						username: OtherUser.username,
						avatar: OtherUser?.avatar,
					},
				],
			})
		} else {
			res.status(400).json({
				error: "This username is already in your contact list",
			})
		}
	} else {
		res.status(400).json({
			error: "User doesn't exist",
		})
	}
})
const remove = expressAsyncHandler(async (req, res) => {
	const { _id } = req.body
	await Contact.findOneAndDelete({
		relatedUser: req.user.id,
		_id,
	})
	res.status(200).json({})
})

module.exports = { add, remove }
