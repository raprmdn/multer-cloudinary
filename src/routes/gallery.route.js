const express = require('express');
const GalleryController = require('../controllers/gallery.controller');
const { uploadGalleryValidation } = require('../utils/validation/gallery.validation');
const { uploadGallery } = require('../middlewares/multer.middleware');

const router = express.Router();

router.get('/', GalleryController.index);
router.post('/', uploadGallery, uploadGalleryValidation, GalleryController.store);
router.get('/:slug', GalleryController.show);
router.delete('/:slug', GalleryController.destroy);

module.exports = router;
