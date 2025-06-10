const path = require("path");

function validateFileType(req, res, next) {

    const ext = path.extname(req.file.originalname).toLowerCase();

    if (ext !== '.pdf' && ext !== '.png' && ext !== '.jpg') {
        return res.status(400).json({ error: "File not allowed" });
    }

    req.fileType = ext === '.pdf' ? 'pdf' : 'image';

    next();
}

module.exports = validateFileType;
