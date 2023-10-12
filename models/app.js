import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  shortcut: {
    type: String,
    required: false,
    unique: true,
  },
});

export default mongoose.model("App", appSchema);
