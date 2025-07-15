import { Router } from "express";
import getAllUsers from "../../handlers/user/get";

const router = Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getAllUsers);

export default router;
