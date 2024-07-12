"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.DependencyInjection = void 0;
const tsyringe_1 = require("tsyringe");
const UsersRepository_1 = require("../modules/users/respositories/UsersRepository");
const UsersRepositoryTypeOrm_1 = require("../modules/users/respositories/implementations/UsersRepositoryTypeOrm");
const HashProvider_1 = require("../providers/hash/HashProvider");
const HashProviderImpl_1 = require("../providers/hash/implementations/HashProviderImpl");
const JwtProviderImpl_1 = require("../providers/jwt/implementations/JwtProviderImpl");
const JwtProvider_1 = require("../providers/jwt/JwtProvider");
class DependencyInjection {
    static init() {
        tsyringe_1.container.registerSingleton(UsersRepository_1.usersRepositoryAlias, UsersRepositoryTypeOrm_1.UsersRepositoryTypeOrm);
        tsyringe_1.container.registerSingleton(HashProvider_1.HashProviderAlias, HashProviderImpl_1.HashProviderImpl);
        tsyringe_1.container.registerSingleton(JwtProvider_1.jwtProviderAlias, JwtProviderImpl_1.JwtProviderImpl);
    }
}
exports.DependencyInjection = DependencyInjection;
function find(token) {
    return tsyringe_1.container.resolve(token);
}
exports.find = find;
