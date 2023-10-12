import catchAsyncError from "../middlewares/catchAsyncError.js";
import App from "../models/app.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getAllApps = catchAsyncError(async (req, res, next) => {
  const getAllApps = await App.find({});
  if (!getAllApps) {
    return next(new ErrorHandler("No apps found", 404));
  }

  res.status(200).json({
    success: true,
    data: getAllApps,
  });
});

export const changeVisibility = catchAsyncError(async (req, res, next) => {
  const appName = req.params.name;
  if (!appName) {
    return next(new ErrorHandler("No app name found", 404));
  }

  const app = await App.findOne({ name: appName });

  app.active = app.active ? false : true;
  await app.save();

  res.status(200).json({
    success: true,
    message: "Visibility changed successfully",
  });
});

export const addShortcut = catchAsyncError(async (req, res, next) => {
  const appName = req.params.name;
  const shortcut = req.params.shortcut;
  if (!appName || !shortcut) {
    return next(new ErrorHandler("No app name or shortcut found", 404));
  }

  const app = await App.findOne({ name: appName });
  if (!app) {
    return next(new ErrorHandler("No app found", 404));
  }

  app.shortcut = shortcut;
  await app.save();

  res.status(200).json({
    success: true,
    message: "Shortcut added successfully",
  });
});

export const getShortcut = catchAsyncError(async (req, res, next) => {
  const appName = req.params.name;
  if (!appName) {
    return next(new ErrorHandler("No app name found", 404));
  }

  const app = await App.findOne({ name: appName });
  if (!app) {
    return next(new ErrorHandler("No app found", 404));
  }

  res.status(200).json({
    success: true,
    shortcut: app.shortcut,
  });
});
