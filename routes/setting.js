import express from "express";
import {
  getBackground,
  getSettings,
  makeSettingActive,
  setBackground,
} from "../controllers/setting.js";
import singleStorage from "../middlewares/multer.js";

const settingRouter = express.Router();

settingRouter.get("/getAllSettings", getSettings);
settingRouter.get("/updateActive:name", makeSettingActive);
settingRouter.get("/getBackground", getBackground);
settingRouter.post("/setBackground", singleStorage, setBackground);

export default settingRouter;
