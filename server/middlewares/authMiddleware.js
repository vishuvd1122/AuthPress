const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Safely extract token from body, query, or Authorization header
  const authHeader = req.get && req.get("authorization") || (req.headers && req.headers["authorization"]) || undefined;
  let token = (req.body && req.body.token) || (req.query && req.query.token) || authHeader;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Missing authorization token",
    });
  }

  // If header format is "Bearer <token>", normalize it
  if (typeof token === "string" && token.toLowerCase().startsWith("bearer ")) {
    token = token.slice(7).trim();
  }

  try {
    const decoded = JWT.verify(token, process.env.SECRET_KEY);
    // Support both payload shapes: { user: {...} } or direct claims
    req.user = decoded && (decoded.user || decoded);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
  return next();
};



module.exports = {verifyToken}
