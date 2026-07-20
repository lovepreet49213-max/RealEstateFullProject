export const uploadFile = async (req, res) => {
    try {
        console.log("req.file:", req.file);

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded."
            });
        }

        const fileInfo = {
            fileName: req.file.filename,
            originalName: req.file.originalname,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            filePath: `/uploads/${req.file.filename}`,
            fileUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
        };

        return res.json({
            success: true,
            data: fileInfo
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};