const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');

    // Add user from payload to request object
    req.user = decoded;
    next(); // Continue with the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
