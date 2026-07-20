import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, "uploads");

    },

    filename: function (req, file, cb) {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1000000) +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif"
];

const fileFilter = (req, file, cb) => {

    if (allowedTypes.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(new Error("Only image files are allowed."), false);

    }

};

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 5 * 1024 * 1024

    }

});

export default upload;