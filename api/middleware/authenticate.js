const jwt = require('jsonwebtoken');
const jwtSecret =
  process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable.';

module.exports = {
  authenticate,
  generateToken,
  validateBody,
};

// -------------------- Authenticate Token -------------------- //

function authenticate(req, res, next) {
  const token = req.session.token;

  if (token) {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) return res.status(401).json(error);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

// ---------------------- Generate Token ---------------------- //

function generateToken(user) {
  user.password = undefined;
  const payload = user;
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, jwtSecret, options);
};

// ---------------------- Custom Middleware ---------------------- //

function validateBody(req, res, next) {
  const user = req.body;

  // Check the request body exists
  if (!user) {
    res.status(400).json({ message: "Please include a first name, last name, email, password, primary phone, and role id." })
  }
  // Check if the required email is in request body
  else if (!user.email) {
    res.status(400).json({ message: "Please include a email address."})
  }
  // Check if the required password is in request body
  else if (!user.password) {
    res.status(400).json({ message: "Please include a password."})
  }
  // Check if the required role id is in request body
  else if (!user.role_id) {
    res.status(400).json({ message: "Please include a role id."})
  }
  // All checks pass, continue
  else {
    next();
  }
};
