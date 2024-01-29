const errorHandler = (err, req, res) => {
	if (process.env.NODE_ENV === "development") console.log(`${err}`)
	if (res) {
		const statusCode = res.statusCode ? res.statusCode : 500
		if (res.status) res.status(statusCode)
		if (res.json)
			res.json({
				message: err.message,
			})
	}
}

module.exports = { errorHandler }
