import { Router } from "express";
import { posts } from "./handler";
import { getAllPosts } from "./handler";
const router = Router();
router.post('/', posts);
router.get('/', getAllPosts);
export default router;