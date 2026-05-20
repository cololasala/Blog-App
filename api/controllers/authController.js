import { db } from "../database/database.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcryptjs";
import cookieParser from "cookie-parser";

export const register = (req, res) => {
  const { username, email, password } = req.body;
  //Check user exists
  const query = "SELECT * FROM users as u WHERE u.username = ? OR u.email = ?";

  db.query(query, [username, email], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json({ message: "User already exist" });

    //Hash the password and then create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const queryInsert =
      "INSERT INTO users(`username`, `email`, `password`, `image`) VALUES (?)";
    const values = [username, email, hash, "image"];

    db.query(queryInsert, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(201).json({ message: "User created successfully" });
    });
  });
};

export const login = (req, res) => {
  const { email, password: userPassword } = req.body;

  //Check user exist
  const queryExist = "SELECT * FROM users as u WHERE u.email = ?";

  db.query(queryExist, [email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json({ message: "Email not found" });

    const isCorrectPassword = bcrypt.compareSync(
      userPassword,
      data[0].password,
    );
    if (!isCorrectPassword)
      return res.status(400).json({ message: "Email or password incorrect" });

    const SECRET_KEY = "this_is_my_secret_key";
    const token = jwt.sign({ id: data[0].id }, "this_is_my_secret_key");
    const { password, ...other } = data[0];

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(other); //access_token es el nombre de la cookie, token es el que enviamos, hace que la cookie NO pueda ser accedida desde JavaScript del frontend (document.cookie)
  });
};

export const logout = (req, res) => {
  return res
    .clearCookie("access_token", {
      sameSite: "none", //Controla si la cookie puede enviarse en requests entre distintos sitios/domains. "none" Permite que la cookie se envíe incluso entre dominios distintos
      secure: true, // Significa que la cookie solo puede viajar por HTTPS
    })
    .status(200)
    .json("User has been logged out");
};
