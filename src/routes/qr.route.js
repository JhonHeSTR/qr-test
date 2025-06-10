const { Router } = require('express');
const multer = require('../libs/multer');
const { qr } = require('../controllers/qr.controller');
const validateFileType = require('../middlewares/fileType.middleware');

const router = Router();

router.post('/', multer.single('file'), validateFileType, qr)

module.exports = router;