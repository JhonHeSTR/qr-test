const { Router } = require('express');
const multer = require('../libs/multer');
const { qr } = require('../controllers/qr');
const validateFileType = require('../middlewares/fileType');

const router = Router();

router.post('/', multer.single('file'), validateFileType, qr)

module.exports = router;