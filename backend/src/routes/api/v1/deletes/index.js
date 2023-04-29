import { Router } from "express";
import { deletepost } from "./handler";
const router = Router();
router.post('/', deletepost);
export default router;