const onlyAdminAccess = (req, res, next) => {
  try {
    // console.log(req.user);
    const { role } = req.user;
    if (role != 3) {
      return res.status(500).json({
        success: false,
        message: "Access not granted!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Access not granted!",
    });
  }
  return next();
};

module.exports = {
  onlyAdminAccess,
};
