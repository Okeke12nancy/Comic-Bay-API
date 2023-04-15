import express from "express";
const paymentRouter = express.Router();

import PaymentController from "../controllers/paystack.controllers.js";
import { isAuthorized } from "../middlewares/authorize.middleware.js";

// Create a new account
paymentRouter.post(
  "/paystack/pay",
  isAuthorized,
  PaymentController.initPayment
);
paymentRouter.get(
  "/paystack/verify/:reference",
  isAuthorized,
  PaymentController.verifyPayment
);
export default paymentRouter;
