import express from "express";
import users from "./api/v1/users";
import posts from "./api/v1/posts";
import deletepost from "./api/v1/deletes";
const rootRouter = express.Router();
rootRouter.use("/api/v1/users", users);
rootRouter.use("/api/v1/posts", posts);
rootRouter.use("/api/v1/deletes", deletepost);
export default rootRouter;
