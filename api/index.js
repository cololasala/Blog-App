import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(cookieParser());
app.use(express.json());

const storage = multer.diskStorage({
  //save in disk
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// aca se ejecuta el middleware de multer
app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("App listen in port 5000");
});
