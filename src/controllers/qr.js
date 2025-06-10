const qr = (req, res) => {
    
    const { fileType } = req;

    if (fileType === 'image') {
        
    }else{
        
    }

    res.status(201).json({ message: 'Ok' });
}

module.exports = {
    qr
}