const express = require('express');
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const name = Date.now() + "" + file.originalname;
        cb(null, name);
    }
})

const upload = multer({ storage: storage })


module.exports = upload;

// for single file upload 
upload.single("inputFieldName");


