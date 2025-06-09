const {Router} = require('express');
const multer = require('../libs/multer');
const {insert} = require('../controllers/qr');

const router = Router();

router.post('/', multer.single('file'), insert)

module.exports = router;