import express from "express";
import { getBackground, setBackground } from "../controllers/background.js";
import singleStorage from "../middlewares/multer.js";
import { isAdmin, isAuthenciated } from "../utils/isAuthenciated.js";

const backgroundRouter = express.Router();

backgroundRouter.get("/getBackground", getBackground);
backgroundRouter.post(
  "/setBackground",
  isAuthenciated,
  isAdmin,
  singleStorage,
  setBackground
);

export default backgroundRouter;
