import { Router } from "express";
import { app } from "../../app";
import { usersRouter } from "./users.routes";
import { productsRouter } from "./products.routes";

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);


export { router };