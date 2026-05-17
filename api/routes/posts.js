import express from "express";
import { addPost } from "../controllers/postsController.js"; //nodemon require the .js extension

const router = express.Router();

router.get("/", addPost);

export default router;
