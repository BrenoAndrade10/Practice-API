"use strict";
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
exports.UsersRepositoryTypeOrm = void 0;
const Database_1 = require("../../../../database/Database");
const User_1 = require("../../entites/User");
class UsersRepositoryTypeOrm {
    constructor() {
        this.repository = Database_1.myDataSource.getRepository(User_1.User);
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.insert(data);
        });
    }
    updateById(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(userId, data);
        });
    }
    findById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id: userId });
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ email });
        });
    }
}
exports.UsersRepositoryTypeOrm = UsersRepositoryTypeOrm;
