const sharp = require('sharp');

const bufferToRaw = async (imageBuffer) => {
    const { data, info } = await sharp(imageBuffer)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    return { data, info }
}

module.exports = bufferToRaw