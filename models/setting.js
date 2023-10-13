import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default mongoose.model("Setting", settingSchema);
