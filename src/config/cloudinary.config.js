const cloudinary  = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

module.exports = {
    cloudinaryStorage: async (filename) => {
        return await cloudinary.uploader.upload(filename, {
            eager_async: true,
            resource_type: 'auto',
            folder: 'learn-upload-cloudinary',
        });
    }
};
