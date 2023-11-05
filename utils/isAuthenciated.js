export const isAuthenciated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
