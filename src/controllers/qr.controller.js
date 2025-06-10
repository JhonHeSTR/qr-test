const { readQr } = require('../helpers/qr.helper');

const qr = async (req, res) => {

    try {
        const qr = await readQr(req.file.buffer);

        if (qr) {
            res.json({ success: true, data: qr.data, location: qr.location });
        } else {
            res.status(404).json({ success: false, message: 'QR not detected' });
        }
    } catch (err) {
        console.error('Error processing QR:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

module.exports = {
    qr
}