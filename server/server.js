const net = require("net")
const server = net.createServer()
let port = 9000
server.once("error", (e) => {
	if (e.code === "EADDRINUSE") {
		port = port + 1
		server.listen(port)
	}
})
server.once("listening", function () {
	server.close()
})
server.listen(port)
server.once("close", function () {
	const express = require("express")
	require("dotenv").config({ path: ".env" })
	express.Router()
	const cors = require("cors")
	const path = require("path")
	const { errorHandler } = require("./middlewares/errorMiddleware")
	const {
		socketAuthMiddleware,
	} = require("./middlewares/socketAuthMiddleware")
	const {
		socketDisconnect,
		socketSendMessage,
		socketDeleteMessage,
		socketDeleteAllMessages,
		socketEditMessage,
		socketCheckConnection,
	} = require("./controllers/socketController")
	const connectDB = require("./configs/db")
	const app = express()
	const cookieParser = require("cookie-parser")
	const origins = [process.env.FRONT_END_URL]
	const CORS = {
		origin: origins,
		credentials: true,
	}

	connectDB()

	try {
		app.use((req, res, next) => {
			console.log(req.headers.cookie)
			console.log(req.cookies)
			next()
		})
		app.use(cookieParser())
	} catch (e) {
		console.log(e)
	}

	app.use(cors(CORS))

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	app.use("/api/users", require("./routes/userRoutes"))
	app.use("/api/message", require("./routes/messageRoutes"))
	app.use("/api/contact", require("./routes/contactRoutes"))
	// Serve static files from the 'images' directory
	app.use(
		"/" + process.env.UPLOAD + "/",
		express.static(path.join(__dirname, "images"))
	)
	// Define a route to handle GET requests for images
	app.get("/" + process.env.UPLOAD + "/:imageName", (req, res) => {
		const { imageName } = req.params
		const imagePath = path.join(__dirname, "uploads", imageName)

		// Send the image file as the response
		res.sendFile(imagePath)
	})

	app.use(errorHandler)
	const SharedServerForSocketIo = app.listen(port, () => {
		console.log(`Server started on port ${port}`)
	})

	const io = require("socket.io")(SharedServerForSocketIo, {
		cors: CORS,
	})

	global.io = io
	global.io.emit("getFrontend", "Global message value")

	io.use(socketAuthMiddleware)

	io.on("connection", async (socket) => {
		console.log(`User with id (${socket.id}) connected`)
		socket.on("sendMessage", (data, callback) => {
			socketSendMessage(socket, data, callback, io)
		})
		socket.on("deleteMessage", (data, callback) => {
			socketDeleteMessage(socket, data, callback, io)
		})
		socket.on("deleteAllMessages", (data, callback) => {
			socketDeleteAllMessages(socket, data, callback, io)
		})
		socket.on("editMessage", (data, callback) => {
			socketEditMessage(socket, data, callback, io)
		})
		socket.on("checkConnection", (callback) => {
			socketCheckConnection(socket, callback)
		})
		socket.on("Disconnect", () => {
			socket.disconnect()
		})
		socket.on("disconnect", () => socketDisconnect(socket))
	})
})
