import { config } from "dotenv";
config({ path: "./config/config.env" });

import { connectDB } from "./config/database.js";
connectDB();

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
