const { Gallery } = require('../models');
const { StatusCodes: status } = require('http-status-codes');
const { apiResponse } = require('../utils/apiResponse.utils');
const { cloudinaryStorage } = require('../config/cloudinary.config');

module.exports = {
    index: async () => {
        try {
            const galleries = await Gallery.findAll();
            return apiResponse(status.OK, 'OK', 'Success get galleries', { galleries })
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
    },
    show: async (req) => {
        try {
            const { slug } = req.params;
            const gallery = await Gallery.findOne({ where: { slug } });
            if (!gallery) throw { code: status.NOT_FOUND, status: 'NOT_FOUND', message: 'Gallery not found' };

            return apiResponse(status.OK, 'OK', 'Success get gallery', { gallery })
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
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
