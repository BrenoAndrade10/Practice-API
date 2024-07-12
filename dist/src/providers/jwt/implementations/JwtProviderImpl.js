"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtProviderImpl = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keySecret = '31e4cb2672cf9f02c6206249293a74031d5a80b6cd4c8bd9afc64d4b192aa1545d4d3175b61266c3b16aa977f9270ed8c130e47763892198121800782e58b588';
class JwtProviderImpl {
    generate(input) {
        const token = jsonwebtoken_1.default.sign(Object.assign({}, input.data), keySecret, { subject: input.subject });
        return { token };
    }
    verify(token) {
        try {
            return jsonwebtoken_1.default.verify(token, keySecret);
        }
        catch (error) {
            return null;
        }
    }
}
exports.JwtProviderImpl = JwtProviderImpl;
