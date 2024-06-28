import { Router } from "express";
import { find } from "../../core/DependencyInjection";
import { CreateUserController } from "../../modules/users/controllers/CreateUserController";
import { UpdateUserController } from "../../modules/users/controllers/UpdateUserController";

export const usersRouter = Router();

usersRouter.post('/', (req, res) => find(CreateUserController).handle(req, res));
usersRouter.patch('/', (req, res) => find(UpdateUserController).handle(req, res));


