const multer = require("multer")

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/") // Destination directory for uploaded files
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname) // Generate unique file name
	},
})

const upload = multer({ storage: storage })

module.exports = upload.single("file")
