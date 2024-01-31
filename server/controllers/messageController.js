const asyncHandler = require("express-async-handler")
const Message = require("../models/messageModel")
const User = require("../models/userModel")

const getChats = asyncHandler(async (req, res) => {
	try {
		const Chats = await Message.aggregate([
			{
				$match: {
					$expr: {
						$or: [
							{ sender: req.user.id },
							{ receiver: req.user.id },
						],
					},
				},
			},
			{
				$group: {
					_id: {
						_id: {
							$sortArray: {
								input: ["$sender", "$receiver"],
								sortBy: 1,
							},
						},
					},
					messages: {
						$top: {
							sortBy: { createdAt: -1 },
							output: "$$ROOT",
						},
					},
				},
			},
			{ $replaceWith: "$messages" },
			{
				$lookup: {
					from: "users",
					localField: "sender",
					foreignField: "_id",
					as: "sender_user",
				},
			},
			{
				$lookup: {
					from: "users",
					localField: "receiver",
					foreignField: "_id",
					as: "receiver_user",
				},
			},
			{
				$project: {
					text: 1,
					type: 1,
					isForwarded: 1,
					isEdited: 1,
					replyId: 1,
					status: 1,
					createdAt: 1,
					"receiver_user._id": 1,
					"receiver_user.fullname": 1,
					"receiver_user.username": 1,
					"receiver_user.avatar": 1,
					"sender_user._id": 1,
					"sender_user.fullname": 1,
					"sender_user.username": 1,
					"sender_user.avatar": 1,
				},
			},
		])
		res.status(200).json({ Chats })
	} catch (error) {
		res.status(422)
		throw new Error(`Something went wrong ${error}`)
	}
})
const getMessages = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body
		const OtherUser = await User.findById(id).select(
			"fullname username avatar"
		)
		const Messages = await Message.find({
			$or: [{ sender: id }, { receiver: id }],
		})
		res.status(200).json({ Messages, OtherUser })
	} catch (error) {
		res.status(422)
		throw new Error(`Something went wrong ${error}`)
	}
})

module.exports = { getChats, getMessages }
