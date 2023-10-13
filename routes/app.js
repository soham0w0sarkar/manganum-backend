import express from "express";
import {
  addShortcut,
  changeVisibility,
  getAllApps,
  getShortcut,
} from "../controllers/app.js";

const appRouter = express.Router();

appRouter.get("/getAllApps", getAllApps);
appRouter.get("/changeVisibility/:name", changeVisibility);
appRouter.get("/getShortcut/:name", getShortcut);
appRouter.get("/addShortcut/:name/:shortcut", addShortcut);

export default appRouter;
