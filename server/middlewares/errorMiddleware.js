const errorHandler = (err, req, res) => {
	console.log(`${err}`)
	const statusCode = res.statusCode ? res.statusCode : 500
	res.status(statusCode)
	res.json({
		message: err.message
	})
}

module.exports = { errorHandler }