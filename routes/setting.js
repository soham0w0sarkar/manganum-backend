import express from "express";
import {
  getBackground,
  getSettings,
  makeSettingActive,
  setBackground,
} from "../controllers/setting.js";
import { isAdmin, isAuthentiated } from "../middlewares/auth.js";
import singleStorage from "../middlewares/multer.js";

const settingRouter = express.Router();

settingRouter.get("/getAllSettings", getSettings);
settingRouter.get(
  "/updateActive:name",
  isAuthentiated,
  isAdmin,
  makeSettingActive
);
settingRouter.get("/getBackground", getBackground);
settingRouter.post(
  "/setBackground",
  isAuthentiated,
  isAdmin,
  singleStorage,
  setBackground
);

export default settingRouter;
