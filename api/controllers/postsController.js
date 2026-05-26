import { db } from "../database/database.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const query = req.query.cat
    ? "SELECT * FROM posts as p WHERE category = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const { id } = req.params;
  const query =
    "SELECT p.*, u.*, p.image as post_image, u.image as user_image FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.id = ?";

  db.query(query, [id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("this is addPost");
};

export const removePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated");

  const SECRET_KEY = "this_is_my_secret_key";
  jwt.verify(token, SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid token");

    const { id } = req.params;

    const query = "DELETE FROM posts WHERE id = ? AND user_id = ?";

    db.query(query, [id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post deleted successfully");
    });
  });
};

export const editPost = (req, res) => {
  res.json("this is addPost");
};
