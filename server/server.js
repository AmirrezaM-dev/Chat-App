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
	const origins = [process.env.FRONT_END_URL]
	const CORS = {
		origin: origins,
		credentials: true,
	}
	const { errorHandler } = require("./middlewares/errorMiddleware")
	const connectDB = require("./configs/db")
	const app = express()
	const cookieParser = require("cookie-parser")
	const cookie = require("cookie")

	connectDB()

	app.use(cookieParser())

	app.use(cors(CORS))

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	app.use("/api/users", require("./routes/userRoutes"))
	app.use("/api/message", require("./routes/messageRoutes"))

	app.use(errorHandler)

	const Server = app.listen(port, () => {
		console.log(`Server started on port ${port}`)
	})

	const io = require("socket.io")(Server, {
		cors: CORS,
	})

	// global.io = io
	// global.io.emit("getFrontend", "Global message value")

	io.on("connection", (socket) => {
		// const cookies = cookie.parse(socket.request.headers.cookie)
		console.log(`User with id (${socket.id}) connected`)

		// socket.on("emit-name", (value) => {})
		socket.on("getBackend", (value, callback) => {
			console.log(value) // 1
			socket.emit("getFrontend", value)
			callback("callback " + value)
		})

		socket.on("disconnect", () => {
			console.log(`User with id (${socket.id}) disconnected`)
		})
	})
})
