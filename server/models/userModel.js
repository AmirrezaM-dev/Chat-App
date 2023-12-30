const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
	fullname: {
		type: String,
		required: [true, 'Please fill the email field'],
		unique: true
	},
	email: {
		type: String,
		required: [true, 'Please fill the email field'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Please fill the password field']
	}
}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)