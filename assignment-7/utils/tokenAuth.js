import { verify } from "jsonwebtoken";
//token authentication verification
export default function authenticateToken(req, res, next) {

  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    // Verify the JWT token and extract the payload
    const payload = verify(token, process.env.SECRET_KEY);

    // Attach the payload to the request object
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    console.log(error);
  }
}
