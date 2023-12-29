import express from "express"
import {
    getUsers,
    registerUser,
    loginUser
} from "../controllers/UsersController.js"

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/users',verifyToken, getUsers);
router.post('/registrasi', registerUser);
router.post('/login', loginUser);

export default router;