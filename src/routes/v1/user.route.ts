import { Router } from "express";
import getAllUsers from "../../handlers/user/get";
import getUserById from "../../handlers/user/getById";

const router = Router();

router.get("/v1/user", getAllUsers);
router.get("/v1/user/:id", getUserById);

export default router;
