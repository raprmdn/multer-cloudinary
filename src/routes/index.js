const express = require('express');
const GalleryRouter = require('./gallery.route');

const router = express.Router();

router.use('/gallery', GalleryRouter);

module.exports = router;
