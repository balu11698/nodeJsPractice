import jwt from "jsonwebtoken";

export const getAccessToken = (req, res) => {
  const { userName, password } = req.body;
  const token = jwt.sign(
    { userName: userName },
    "6df40d0a7ca651ded87a46300948993ddf888cb0d2ab7c37d04113c0bcb3a3f6f2ea12798ec55b829b9c5a800b200e637b2eec6ffae8db83273566a5ec94f0a2",
    { expiresIn: "30s" }
  );
  console.log(token);
  res.json({ token });
};
