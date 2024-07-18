import { container, InjectionToken } from "tsyringe";
import { UsersRepository, usersRepositoryAlias } from "../modules/users/respositories/UsersRepository";
import { UsersRepositoryTypeOrm } from "../modules/users/respositories/implementations/UsersRepositoryTypeOrm";
import { HashProvider, HashProviderAlias } from "../providers/hash/HashProvider";
import { HashProviderImpl } from "../providers/hash/implementations/HashProviderImpl";
import { JwtProviderImpl } from "../providers/jwt/implementations/JwtProviderImpl";
import { JwtProvider, jwtProviderAlias } from "../providers/jwt/JwtProvider";
import { ProductsRepository, productsRepositoryAlias } from "../modules/products/repositories/ProductsReposiotry";
import { ProductsRepositoryTypeOrm } from "../modules/products/repositories/implementations/ProductsRepositoryTypeOrm";

export class DependencyInjection {
    static init(): void {
        container.registerSingleton<UsersRepository>(usersRepositoryAlias, UsersRepositoryTypeOrm);
        container.registerSingleton<HashProvider>(HashProviderAlias, HashProviderImpl);
        container.registerSingleton<JwtProvider>(jwtProviderAlias, JwtProviderImpl);
        container.registerSingleton<ProductsRepository>(productsRepositoryAlias, ProductsRepositoryTypeOrm);
    }
}

export function find<T>(token: InjectionToken<T>): T {
	return container.resolve(token);
}