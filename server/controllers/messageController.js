const expressAsyncHandler = require("express-async-handler")
const Message = require("../models/messageModel")
const User = require("../models/userModel")
const Contact = require("../models/contactModel")
const Blacklist = require("../models/blacklistModel")

const getChatsAndContacts = expressAsyncHandler(async (req, res) => {
	try {
		const Chats = await Message.aggregate([
			{
				$match: {
					$or: [
						{
							receiver: { $eq: req.user._id },
							isDeleted: false,
							isReceiverDeleted: false,
						},
						{
							sender: { $eq: req.user._id },
							isDeleted: false,
							isSenderDeleted: false,
						},
					],
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
		const Contacts = await Contact.aggregate([
			{
				$match: {
					relatedUser: req.user._id,
				},
			},
			{
				$lookup: {
					from: "users",
					localField: "contactUser",
					foreignField: "_id",
					as: "contactUser",
				},
			},
			{
				$project: {
					"contactUser._id": 1,
					"contactUser.fullname": 1,
					"contactUser.username": 1,
					"contactUser.avatar": 1,
				},
			},
		])
		const Blocked = await Blacklist.aggregate([
			{
				$match: {
					relatedUser: req.user._id,
				},
			},
			{
				$lookup: {
					from: "users",
					localField: "blacklistUser",
					foreignField: "_id",
					as: "blacklistUser",
				},
			},
			{
				$project: {
					"blacklistUser._id": 1,
					"blacklistUser.fullname": 1,
					"blacklistUser.username": 1,
					"blacklistUser.avatar": 1,
				},
			},
		])
		res.status(200).json({ Chats, Contacts, Blocked })
	} catch (error) {
		res.status(422)
		throw new Error(`Something went wrong ${error}`)
	}
})
const getMessages = expressAsyncHandler(async (req, res) => {
	const { id } = req.body
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		res.status(422)
		throw new Error(`Invalid url`)
	} else
		try {
			const OtherUser = await User.findById(id).select(
				"fullname username avatar"
			)
			if (OtherUser) {
				let Messages
				if (id !== req.user.id) {
					// not saved messages
					Messages = await Message.find({
						isDeleted: false,
						$or: [
							{
								$and: [
									{ sender: id },
									{ receiver: req.user._id },
									{ isReceiverDeleted: false },
								],
							},
							{
								$and: [
									{ sender: req.user._id },
									{ receiver: id },
									{ isSenderDeleted: false },
								],
							},
						],
					})
				} else {
					// saved messages
					Messages = await Message.find({
						$and: [
							{ sender: id },
							{ receiver: id },
							{ isDeleted: false },
							{ isSenderDeleted: false },
							{ isReceiverDeleted: false },
						],
					})
				}
				res.status(200).json({ Messages, OtherUser })
			} else {
				res.status(422)
				throw new Error(`User not found`)
			}
		} catch (error) {
			console.log(error)
			res.status(422)
			throw new Error(`Something went wrong`)
		}
})

module.exports = {
	getChatsAndContacts,
	getMessages,
}
