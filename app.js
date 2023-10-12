import passport from "passport";
import express from "express";
import errorMiddleware from "./middlewares/error.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Everynian!!");
});

import settingRouter from "./routes/setting.js";

app.use("/api/v1/setting", settingRouter);

export default app;

app.use(errorMiddleware);
