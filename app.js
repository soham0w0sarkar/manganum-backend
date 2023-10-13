import express from "express";
import session from "express-session";
import passport from "passport";
import errorMiddleware from "./middlewares/error.js";

import { config } from "dotenv";
config({ path: "./config/config.env" });

const app = express();

import intializePassport from "./config/passport.js";
intializePassport(passport);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello Everynian!!");
});

import settingRouter from "./routes/setting.js";
import appRouter from "./routes/app.js";
import authRouter from "./routes/auth.js";

app.use("/setting", settingRouter);
app.use("/app", appRouter);
app.use("/auth", authRouter);

export default app;

app.use(errorMiddleware);
