const multer = require('multer');
const path = require('path')

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './app/public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '--' + file.originalname)
//     }
// })

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|png|jpg|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error(`Image format should be one of ${filetypes}`), false);
    }
}
const upload = multer({
    limits: {
        fields: 5,
        fieldNameSize: 50, // TODO: Check if this size is enough
        fieldSize: 20000, //TODO: Check if this size is enough
        fileSize: 15000000, // 150 KB for a 1080x1080 JPG 90
    },
    fileFilter: function(_req, file, cb) {
        checkFileType(file, cb);
    },
    // storage: fileStorageEngine
}).single('image')

function wrapper(req, res, next) {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        } else {
            next()
        }
    })

}

module.exports = wrapper;