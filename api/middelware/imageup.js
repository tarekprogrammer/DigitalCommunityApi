
var imageUpload = (req, res, next) => {
        if (!req.files || Object.keys(req.files).length === 0) {
                return res.json({
                        isSuccess: false,
                        message: "Image is missing!",
                });
        }

        var img = req.files.photo;
        var dir = `uploads/images/${img.name}`;
        var image = `/uploads/images/${img.name}`;
        img.mv(dir, (err) => {
                if (err) throw err;
        });
        req.body.imageUrl = image
        next();
}

module.exports = imageUpload;
