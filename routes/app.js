import express from "express";
import {
  addShortcut,
  changeVisibility,
  getAllApps,
  getShortcut,
} from "../controllers/app.js";

const app = express();

app.get("/getAllApps", getAllApps);
app.get("/changeVisibility/:name", changeVisibility);
app.get("/getShortcut/:name", getShortcut);
app.get("/addShortcut/:name/:shortcut", addShortcut);

export default app;
