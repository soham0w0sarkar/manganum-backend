import { connectDB } from "./config/database.js";
connectDB();

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on: http://localhost:${process.env.PORT}`);
});
