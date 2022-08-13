import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const token = authHeader?.split(" ")[1];
  jwt.verify(
    token,
    "6df40d0a7ca651ded87a46300948993ddf888cb0d2ab7c37d04113c0bcb3a3f6f2ea12798ec55b829b9c5a800b200e637b2eec6ffae8db83273566a5ec94f0a2",
    (err, decode) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decode.userName;
      next();
    }
  );
};

export default verifyJWT;
