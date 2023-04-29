import express from "express";
import users from "./api/v1/users";
import posts from "./api/v1/posts";
const rootRouter = express.Router();
rootRouter.use("/api/v1/users", users);
rootRouter.use("/api/v1/posts", posts);
export default rootRouter;
