import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import docRouter from "./doc.routes.js";
import comicRouter from "./comics.routes.js";
import paystackRouter from "./payment.routes.js";
const basePath = "/api/v1";

export default (app) => {
  app.use(`${basePath}/auth`, authRouter);
  app.use(`${basePath}/users`, userRouter);
  app.use(`${basePath}/docs`, docRouter);
  app.use(`${basePath}`, comicRouter);
  app.use(`${basePath}`, paystackRouter);
};
