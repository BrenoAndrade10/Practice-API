import { Router } from "express";
import { find } from "../../core/DependencyInjection";
import { CreateUserController } from "../../modules/users/controllers/CreateUserController";
import { UpdateUserController } from "../../modules/users/controllers/UpdateUserController";
import { _ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthUserController } from "../../modules/users/controllers/AuthUserController";

export const usersRouter = Router();

usersRouter.post('/', (req, res) => find(CreateUserController).handle(req, res));
usersRouter.patch('/', _ensureAuthenticated, (req, res) => find(UpdateUserController).handle(req, res));
usersRouter.post('/auth', (req, res) => find(AuthUserController).handle(req, res));


