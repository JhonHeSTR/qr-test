const jsQR = require('jsqr');
const bufferToRaw = require('../utils/bufferToRaw.util');

async function readQr(imageBuffer) {

    const { data, info } = await bufferToRaw(imageBuffer);

    const imageData = new Uint8ClampedArray(data);

    const qrCode = jsQR(imageData, info.width, info.height);

    return qrCode;
}

module.exports = { readQr };
