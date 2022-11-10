const GalleryService = require('../services/gallery.service');

module.exports = {
    index: async (req, res) => {
        try {

        } catch (e) {
            return res.status(e.code).json(e);
        }
    },
    show: async (req, res) => {
        try {

        } catch (e) {
            return res.status(e.code).json(e);
        }
    },
    store: async (req, res) => {
        try {
            const serviceResponse = await GalleryService.store(req);
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }
};
