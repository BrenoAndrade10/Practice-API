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
exports.CreateUsersTable1718838090674 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1718838090674 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'users',
                columns: [
                    new typeorm_1.TableColumn({
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }),
                    new typeorm_1.TableColumn({
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    }),
                    new typeorm_1.TableColumn({
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    }),
                    new typeorm_1.TableColumn({
                        name: 'password',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    }),
                    new typeorm_1.TableColumn({
                        name: 'document',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    }),
                    new typeorm_1.TableColumn({
                        name: 'phone',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    })
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.CreateUsersTable1718838090674 = CreateUsersTable1718838090674;
