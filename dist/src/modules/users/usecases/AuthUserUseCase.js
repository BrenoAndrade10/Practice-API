"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const HashProvider_1 = require("../../../providers/hash/HashProvider");
const UsersRepository_1 = require("../respositories/UsersRepository");
const User_1 = require("../entites/User");
let AuthUserUseCase = class AuthUserUseCase {
    constructor(usersRepository, hashProvider) {
        this.usersRepository = usersRepository;
        this.hashProvider = hashProvider;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findByEmail(input.email);
            if (!user) {
                throw Error('USER_NOT_FOUND');
            }
            const passwordMatch = yield this.hashProvider.verify(input.password, user.password);
            if (!passwordMatch) {
                throw Error('PASSWORD_INCORRECT');
            }
            const { token } = User_1.User.generateAuthToken(user.id);
            return {
                user,
                token,
            };
        });
    }
};
exports.AuthUserUseCase = AuthUserUseCase;
exports.AuthUserUseCase = AuthUserUseCase = __decorate([
    (0, tsyringe_1.singleton)(),
    __param(0, (0, tsyringe_1.inject)(UsersRepository_1.usersRepositoryAlias)),
    __param(1, (0, tsyringe_1.inject)(HashProvider_1.HashProviderAlias)),
    __metadata("design:paramtypes", [Object, Object])
], AuthUserUseCase);
