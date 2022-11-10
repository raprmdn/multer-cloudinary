const { Gallery } = require('../models');
const { StatusCodes: status } = require('http-status-codes');
const { apiResponse } = require('../utils/apiResponse.utils');
const { cloudinaryStorage } = require('../config/cloudinary.config');

module.exports = {
    index: async (req) => {

    },
    show: async (req) => {

    },
    store: async (req) => {
        try {
            const { title, slug } = req.body;
            const result = await cloudinaryStorage(req.file.path);
            const gallery = await Gallery.create({ title, slug, image: result.secure_url });

            return apiResponse(status.OK, 'success', 'Success upload an image', { gallery });
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
    }
};
