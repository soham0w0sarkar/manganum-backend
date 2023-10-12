import cloudinary from "cloudinary";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import getDataUri from "../middlewares/dataUri.js";
import Setting from "../models/setting.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getSettings = catchAsyncError(async (req, res, next) => {
  const settings = await Setting.find({});
  const activeSettings = [];

  settings.forEach((setting) => {
    if (setting.active) activeSettings.push(setting);
  });

  res.status(200).json({
    success: true,
    settings: activeSettings,
  });
});

export const getBackground = catchAsyncError(async (req, res, next) => {
  const settingName = await Setting.findOne({ name: "background" });
  if (!settingName)
    return next(new ErrorHandler("No such setting found!!", 404));

  const url = settingName.value.url;
  res.status(200).json({
    success: true,
    url,
  });
});

export const makeSettingActive = catchAsyncError(async (req, res, next) => {
  const settingName = req.params.name;
  const setting = await Setting.findOne({ name: settingName });

  if (!setting) return next(new ErrorHandler("No such setting found!!", 404));

  setting.active = setting.active ? false : true;
  await setting.save();

  res.status(200).json({
    success: true,
    setting,
  });
});

export const setBackground = catchAsyncError(async (req, res, next) => {
  const settingName = await Setting.findOne({ name: "background" });
  if (!settingName)
    return next(new ErrorHandler("No such setting found!!", 404));

  const file = req.file;
  if (!file) return next(new ErrorHandler("No file found!!", 404));

  const fileUri = getDataUri(file);

  const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    folder: "background",
    use_filename: true,
  });

  await cloudinary.v2.uploader.destroy(settingName.value.public_id);

  settingName.value.public_id = uploadCloud.public_id;
  settingName.value.url = uploadCloud.secure_url;
  await settingName.save();

  res.status(200).json({
    success: true,
    message: "Background image updated successfully!!",
  });
});
