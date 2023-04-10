import { Router } from "express";
import { getAllUsers } from "./handler";
import { createOneUser } from "./handler";
import { getOneUser } from "./handler";
const router = Router();
router.get('/', getAllUsers);
router.post('/', createOneUser);
router.get('/:id', getOneUser);
export default router;