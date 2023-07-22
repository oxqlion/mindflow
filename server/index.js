import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.listen(3000, () => {
  console.log("Server up and running ...");
});

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mindflow",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.execute(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log("username: ", username);
  console.log("password: ", password);

  db.execute(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        console.log(result);
        res.send({ message: "Wrong username/password" });
      }
    }
  );
});
