import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default mongoose.model("Setting", settingSchema);
