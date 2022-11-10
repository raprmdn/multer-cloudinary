const multer = require('multer');
const crypto = require('crypto');
const { imageExtensions } = require('../helpers/extensions.helper');

const upload = multer({
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            const randomString = crypto.randomBytes(16).toString("hex");
            cb(null, `${randomString}.${file.mimetype.split('/')[1]}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (!imageExtensions(file.mimetype)) {
            return cb(new Error('File type is not supported. Only support PNG, JPEG, JPG, GIF, SVG, and WEBP.'), false);
        } else {
            cb(null, true);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

const gallery = upload.single('photo');

module.exports = {
    uploadGallery: (req, res, next) => {
        gallery(req, res, (err) => {
            if (err) {
                return res.status(422).json({
                    code: 422,
                    status: 'UNPROCESSABLE_ENTITY',
                    message: 'The given data was invalid.',
                    errors: {
                        photo: err.message
                    }
                });
            }

            next();
        });
    },
};
