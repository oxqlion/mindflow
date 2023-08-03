import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    console.log("Masuk refresh token");
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      console.log("Gaada refresh token");
      return res.sendStatus(401);
    } else {
      console.log("Ada refresh token");
    }
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) {
      console.log("Di refreshToken js gaada user");
      return res.sendStatus(403);
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        console.log("Masuk refresh token 2");
        if (err) return res.sendStatus(403);
        const userId = user[0].id;
        const username = user[0].username;
        const userEmail = user[0].email;
        const accessToken = jwt.sign(
          { userId, username, userEmail },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log("Refresh Token Error: ", error);
  }
};
