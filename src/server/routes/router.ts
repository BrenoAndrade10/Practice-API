import { Router } from "express";
import { app } from "../../app";
import { usersRouter } from "./users.routes";

const router = Router();

router.use('/users', usersRouter);


export { router };