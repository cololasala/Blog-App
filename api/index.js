import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("App listen in port 5000");
});
