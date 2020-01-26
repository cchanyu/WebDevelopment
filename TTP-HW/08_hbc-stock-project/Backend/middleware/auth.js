const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  const token = request.headers['x-access-token']

  // Check for token
  if (!token)
    return response.status(401).json({ message: "No token, authorizaton denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, 'test');
    // Add user from payload
    request.userid = decoded.userid;
    next();
  } catch (e) {
    response.status(400).json({ message: "Token is not valid" });
  }
}

module.exports = auth;