import express from "express";
import {
  addPost,
  editPost,
  removePost,
  getPosts,
  getPost,
} from "../controllers/postsController.js"; //nodemon require the .js extension

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", removePost);
router.put("/:id", editPost);

export default router;
