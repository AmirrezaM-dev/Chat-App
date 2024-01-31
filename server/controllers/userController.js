const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const csrf = require("csrf")()
const Token = require("../models/tokenModel")

const login = asyncHandler(async (req, res) => {
	try {
		if (!req.body?.email && !req.body?.password) {
			res.status(400)
			throw new Error("Please fill all fields")
		}
		if (req.cookies.lt) {
			await Token.findOneAndDelete({ lt: req.cookies.lt, active: true })
			res.clearCookie("lt")
		}
		const email = req.body.email.toLowerCase(),
			password = req.body.password
		const user = await User.findOne({ email })
		if (user && (await bcrypt.compare(password, user.password))) {
			const token = generateToken(user._id)
			const csrfSecret = await csrf.secret()
			const csrfToken = csrf.create(csrfSecret)

			await Token.create({ user: user.id, lt: token, cs: csrfSecret })

			res.cookie("lt", token, {
				path: "/",
				sameSite: "none",
				maxAge: 99999999,
				httpOnly: true,
				secure: true,
			})

			const { _id, fullname } = user

			res.status(200).json({
				_id,
				fullname,
				email,
				csrfToken,
			})
		} else {
			res.status(400)
			throw new Error("Invalid credentials")
		}
	} catch (error) {
		res.status(422)
		if (error.message === "Invalid credentials")
			throw new Error(error.message)
		else throw new Error("Something went wrong")
	}
})

const get = asyncHandler(async (req, res) => {
	try {
		const { fullname, email, _id } = await User.findById(req.user.id)
		res.status(200).json({
			_id,
			fullname,
			email,
		})
	} catch (error) {
		res.status(422)
		throw new Error(`Something went wrong`)
	}
})

const logout = asyncHandler(async (req, res) => {
	if (req.cookies.lt) {
		await Token.findOneAndDelete({ lt: req.cookies.lt, active: true })
		res.clearCookie("lt")
		res.status(200).json({})
	}
})

const register = asyncHandler(async (req, res) => {
	if (!req.body?.email && !req.body?.password) {
		res.status(400)
		throw new Error("Please fill all fields")
	}

	const email = req.body.email.toLowerCase()

	const userExist = await User.findOne({ email })
	if (userExist) {
		res.status(400)
		throw new Error("Email already exists")
	}

	const salt = await bcrypt.genSalt(10)
	const password = await bcrypt.hash(req.body.password, salt)
	const fullname = req.body.fullname

	const user = await User.create({ fullname, email, password })

	if (user) {
		login(req, res)
	} else {
		res.status(400)
		throw new Error("Invalid user data")
	}
})

const generateToken = (id) => {
	return jwt.sign({ id }, "abc123", {
		expiresIn: "30d",
	})
}

module.exports = { register, login, logout, get }
