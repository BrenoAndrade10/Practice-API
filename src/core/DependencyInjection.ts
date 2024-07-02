import { container, InjectionToken } from "tsyringe";
import { UsersRepository, usersRepositoryAlias } from "../modules/users/respositories/UsersRepository";
import { UsersRepositoryTypeOrm } from "../modules/users/respositories/implementations/UsersRepositoryTypeOrm";
import { CreateUserUseCase } from "../modules/users/usecases/CreateUserUseCase";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { HashProvider, HashProviderAlias } from "../providers/hash/HashProvider";
import { HashProviderImpl } from "../providers/hash/implementations/HashProviderImpl";
import { JwtProviderImpl } from "../providers/jwt/implementations/JwtProviderImpl";
import { JwtProvider, jwtProviderAlias } from "../providers/jwt/JwtProvider";

export class DependencyInjection {
    static init(): void {
        container.registerSingleton<UsersRepository>(usersRepositoryAlias, UsersRepositoryTypeOrm);
        container.registerSingleton<HashProvider>(HashProviderAlias, HashProviderImpl);
        container.registerSingleton<JwtProvider>(jwtProviderAlias, JwtProviderImpl);
    }
}

export function find<T>(token: InjectionToken<T>): T {
	return container.resolve(token);
}