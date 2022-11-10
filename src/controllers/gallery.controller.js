const GalleryService = require('../services/gallery.service');

module.exports = {
    index: async (req, res) => {
        try {
            const serviceResponse = await GalleryService.index();
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    },
    show: async (req, res) => {
        try {
            const serviceResponse = await GalleryService.show(req);
            return res.status(serviceResponse.code).json(serviceResponse);
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
    },
    destroy: async (req, res) => {
        try {
            const serviceResponse = await GalleryService.destroy(req);
            return res.status(serviceResponse.code).json(serviceResponse);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }
};
