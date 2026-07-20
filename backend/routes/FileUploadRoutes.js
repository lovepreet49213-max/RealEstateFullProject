import express from "express";
import { uploadFile } from "../controller/FileUploadController.js";
import upload from "../middleware/FileUpload.js";

const router = express.Router();

router.post(
    "/",
    upload.single("image"),
    uploadFile
);

export default router;