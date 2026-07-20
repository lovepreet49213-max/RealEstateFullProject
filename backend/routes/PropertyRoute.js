import express from "express";
import multer from "multer";
import {
    addProperty,
    getAllProperties,
    updateProperty,
    deleteProperty,
    getPropertyById,
    getPaginatedProperties,
    getSimilarProperties,
    getRecentProperties,
    getPropertyDetails
} from "../controller/PropertyController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

router.post("/addProperty", protect, adminOnly, upload.array("images", 10), addProperty);

router.get("/getAllProperties", getAllProperties);
router.get("/getPropertyById/:id", getPropertyById);

router.put("/updateProperty/:id", protect, adminOnly, upload.array("images", 10), updateProperty);

router.delete("/deleteProperty/:id", protect, adminOnly, deleteProperty);

router.get("/getPaginatedProperties/:page/:limit", getPaginatedProperties);
router.get("/getSimilarProperties/:id", getSimilarProperties);
router.get("/recentProperties", getRecentProperties);
router.get("/getPropertyDetails/:id", getPropertyDetails);


export default router;