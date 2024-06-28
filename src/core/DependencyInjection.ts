import { container, InjectionToken } from "tsyringe";
import { UsersRepository, usersRepositoryAlias } from "../modules/users/respositories/UsersRepository";
import { UsersRepositoryTypeOrm } from "../modules/users/respositories/implementations/UsersRepositoryTypeOrm";
import { CreateUserUseCase } from "../modules/users/usecases/CreateUserUseCase";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { HashProvider, HashProviderAlias } from "../providers/HashProvider";
import { HashProviderimpl } from "../providers/implementations/HashProviderImpl";

export class DependencyInjection {
    static init(): void {
        container.registerSingleton<UsersRepository>(usersRepositoryAlias, UsersRepositoryTypeOrm);
        container.registerSingleton<HashProvider>(HashProviderAlias, HashProviderimpl);
    }
}

export function find<T>(token: InjectionToken<T>): T {
	return container.resolve(token);
}