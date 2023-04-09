import { Router } from "express";
import { getAllUsers } from "./handler";
const router = Router();
router.get(`/`, getAllUsers);
export default router;