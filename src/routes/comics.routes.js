import express from "express";
const comicRouter = express.Router();

comicRouter.get("/singledata/:urlType/:id", comicRouter);

comicRouter.get("/:urlType", comicRouter);

export default comicRouter;
