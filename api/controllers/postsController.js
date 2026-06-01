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
    "SELECT p.*, u.*, p.image as post_image, p.id as post_id, u.image as user_image FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.id = ?";

  db.query(query, [id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated");

  const SECRET_KEY = "this_is_my_secret_key";
  jwt.verify(token, SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid token");

    const query =
      "INSERT INTO posts(`title`,`description`, `image`, `created_at`, `user_id`, `category`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.image,
      req.body.created_at,
      userInfo.id,
      req.body.category,
    ];

    db.query(query, [values], (error, data) => {
      if (error) return res.status(500).json(error);

      return res.status(200).json("Post created successfully");
    });
  });
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
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated");

  const SECRET_KEY = "this_is_my_secret_key";

  jwt.verify(token, SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid token");
    const { id } = req.params;

    const query =
      "UPDATE posts SET `title`= ?, `description`= ?,`category`= ?,`image`= ? WHERE `id`= ? AND `user_id` = ? ";

    const values = [
      req.body.title,
      req.body.description,
      req.body.category,
      req.body.image,
    ];

    db.query(query, [...values, id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post edited successfully");
    });
  });
};
