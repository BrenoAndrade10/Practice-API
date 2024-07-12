"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./server/routes/router");
const DependencyInjection_1 = require("./core/DependencyInjection");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
DependencyInjection_1.DependencyInjection.init();
app.use((0, cors_1.default)({ origin: '*' }));
app.options('*', (0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(router_1.router);
