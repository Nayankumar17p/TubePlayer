import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        const uniqieSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqieSuffix + "-" + file.originalname)
    }
})

export const upload = multer({ storage: storage }); 
