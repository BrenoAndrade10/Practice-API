import { Router } from "express";
import { find } from "../../core/DependencyInjection";
import { CreateProductController } from "../../modules/products/controllers/CreateProductController";


export const productsRouter = Router();
productsRouter.post('/', (req, res) => find(CreateProductController).handle(req, res));
