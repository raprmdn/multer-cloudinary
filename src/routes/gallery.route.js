const express = require('express');
const GalleryController = require('../controllers/gallery.controller');
const { uploadGalleryValidation } = require('../utils/validation/gallery.validation');
const { uploadGallery } = require('../middlewares/multer.middleware');

const router = express.Router();

router.post('/', uploadGallery, uploadGalleryValidation, GalleryController.store);

module.exports = router;
