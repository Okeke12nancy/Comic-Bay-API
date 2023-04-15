import express from "express";

const userRouter = express.Router();
import { isAuthorized } from "../middlewares/authorize.middleware.js";
import userController from "../controllers/user.controller.js";

userRouter.get("/", userController.findUsers);
userRouter.get("/:id", userController.findOneUser);
userRouter.put("/:id", isAuthorized, userController.updateUser);
userRouter.delete("/:id", isAuthorized, userController.deleteOneUser);

export default userRouter;
