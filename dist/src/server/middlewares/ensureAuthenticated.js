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
exports._ensureAuthenticated = void 0;
const JwtProvider_1 = require("../../providers/jwt/JwtProvider");
const DependencyInjection_1 = require("../../core/DependencyInjection");
function _ensureAuthenticated(req, _res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const token = (_b = ((_a = req.headers.authorization) !== null && _a !== void 0 ? _a : '').split(' ')[1]) !== null && _b !== void 0 ? _b : '';
        if (!token)
            throw Error('UNAUTHORIZED');
        const jwtProvider = (0, DependencyInjection_1.find)(JwtProvider_1.jwtProviderAlias);
        const payload = jwtProvider.verify(token);
        if (!payload)
            throw Error('UNAUTHORIZED');
        const { sub } = payload;
        req.user = {
            id: parseInt(sub, 10)
        };
        next();
    });
}
exports._ensureAuthenticated = _ensureAuthenticated;
