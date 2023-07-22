import express, { response } from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.listen(3000, () => {
  console.log("Server up and running ...");
});

const saltRound = 10;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mindflow",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //   db.execute(
  //     "INSERT INTO users (username, password) VALUES (?, ?)",
  //     [username, password],
  //     (err, result) => {
  //       console.log(err);
  //     }
  //   );

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      console.log("err: ", err);
    }
    db.execute(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log("err: ", err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log("username: ", username);
  console.log("password: ", password);

  //   db.execute(
  //     "SELECT * FROM users WHERE username = ? AND password = ?",
  //     [username, password],
  //     (err, result) => {
  //       if (err) {
  //         res.send({ err: err });
  //       }
  //       if (result.length > 0) {
  //         res.send(result);
  //       } else {
  //         console.log(result);
  //         res.send({ message: "Wrong username/password" });
  //       }
  //     }
  //   );

  db.execute(
    "SELECT * FROM users WHERE username = ?;",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log("User Session: ", req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});
