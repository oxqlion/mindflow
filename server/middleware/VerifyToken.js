import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auth Header: ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token: ", token);
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};
