import express from "express";
const paymentRouter = express.Router();

import PaymentController from "../controllers/paystack.controllers.js";

// Create a new account
paymentRouter.post("/paystack/pay", PaymentController.initPayment);
paymentRouter.get(
  "/paystack/verify/:reference",
  PaymentController.verifyPayment
);
export default paymentRouter;
