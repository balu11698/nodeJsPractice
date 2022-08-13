import Exprees from "express";
import { getAccessToken } from "../controllers/authController.js";

const router = Exprees();

router.route("/").post(getAccessToken);

export default router;
