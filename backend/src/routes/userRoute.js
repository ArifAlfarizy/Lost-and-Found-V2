import express, { Router } from "express";
import { createUserController, findUserController } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", findUserController) //  Find user by email
userRouter.post("/", createUserController) // Create user 

export default userRouter;