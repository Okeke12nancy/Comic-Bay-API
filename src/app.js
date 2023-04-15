import express from "express";
import cors from "cors";
import methodOverride from "method-override";
import appRoutes from "./routes/app.routes.js";

// import bodyParser from "body-parser";
// import pug from "pug";
// import _ from "lodash";
// import dotenv from "dotenv";
// import path from "path";
// import logger from "morgan";

export default ({ app }) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Post-IT API Ready to go", error: false });
  });

  app.get("/health-check", (req, res) => {
    return res.status(200).json({ message: "All good here 😁" });
  });

  app.enable("trust proxy");

  app.use(cors());

  app.use(methodOverride());

  // Transforms the raw string of req.body into json
  app.use(express.json());

  appRoutes(app);

  /// catch 404 and forward to error handler
  app.use("*", (req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    res.status(404).json({
      message: "Not Found",
      error: true,
    });
    next();
  });
};
