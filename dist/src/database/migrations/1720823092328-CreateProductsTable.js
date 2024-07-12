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
exports.CreateProductsTable1720823092328 = void 0;
const typeorm_1 = require("typeorm");
class CreateProductsTable1720823092328 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            new typeorm_1.Table({
                name: 'products',
                columns: [
                    new typeorm_1.TableColumn({
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }),
                    new typeorm_1.TableColumn({
                        name: 'product',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }),
                    new typeorm_1.TableColumn({
                        name: 'price',
                        type: 'int',
                        isNullable: false
                    }),
                    new typeorm_1.TableColumn({
                        name: 'description',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    }),
                    new typeorm_1.TableColumn({
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'now()',
                    }),
                    new typeorm_1.TableColumn({
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                        onUpdate: 'CURRENT_TIMESTAMP',
                    }),
                ]
            });
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.CreateProductsTable1720823092328 = CreateProductsTable1720823092328;
