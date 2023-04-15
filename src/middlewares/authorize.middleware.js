import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import userService from "../services/user.service.js";

// Confirm it is an admin
export const isAuthorized = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message:
          "Unauthorized Request! You are not allowed to make request to this endpoint",
      });
    }
    const token = await req.headers.authorization.split(" ")[1];
    if (token === undefined) {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message:
          "Unauthorized Request! You are not allowed to make request to this endpoint",
      });
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    // confirm that the token is valid
    if (!decodedToken) {
      return res.status(401).json({
        status: "error",
        statusCode: 401,
        message: "Token is not valid",
      });
    }

    const userId = decodedToken.data.userId;

    // Check if Admin Id Exists in the admin database
    const user = await User.findById(userId).select("+password");

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
