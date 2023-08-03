// import express, { response } from "express";
// import mysql from "mysql2";
// import cors from "cors";
// import bcrypt from "bcrypt";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import session from "express-session";

// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 24,
//     },
//   })
// );

// app.listen(3000, () => {
//   console.log("Server up and running ...");
// });

// const saltRound = 10;

// const db = mysql.createConnection({
//   //   user: process.env.DB_USER,
//   //   host: process.env.DB_HOST,
//   //   password: process.env.DB_PASSWORD,
//   //   database: process.env.DB_NAME,

//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "mindflow",
// });

// app.post("/register", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;

//   bcrypt.hash(password, saltRound, (err, hash) => {
//     if (err) {
//       console.log("err: ", err);
//     }
//     db.execute(
//       "INSERT INTO users (username, password, first_name, last_name) VALUES (?,?,?,?)",
//       [username, hash, firstName, lastName],
//       (err, result) => {
//         console.log("err: ", err);
//       }
//     );
//   });
// });

// app.get("/login", (req, res) => {
//   if (req.session.user) {
//     console.log(req.session.user);
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     console.log("gaada user brow");
//     res.send({ loggedIn: false });
//   }
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   console.log("username: ", username);
//   console.log("password: ", password);

//   db.execute(
//     "SELECT * FROM users WHERE username = ?;",
//     [username],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result.length > 0) {
//         bcrypt.compare(password, result[0].password, (error, response) => {
//           if (response) {
//             req.session.user = result;
//             console.log("User Session: ", req.session.user);
//             res.send(result);
//             // res.redirect("/");
//           } else {
//             res.send({ message: "Wrong username/password" });
//           }
//         });
//       } else {
//         res.send({ message: "User doesn't exist" });
//       }
//     }
//   );
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       res.status(500).send({ message: "Error logging out" });
//     } else {
//       res.clearCookie("userId");
//       res.send({ message: "Logged out successfully" });
//     }
//   });
// });

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import db from "./config/database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
  await db.sync();
} catch (error) {
  console.log("Error: ", error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
