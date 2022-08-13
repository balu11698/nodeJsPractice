import Express from "express";
import { getAllAnime } from "../controllers/animeController.js";

const router = Express.Router();

router.route("/").get(getAllAnime);

export default router;
