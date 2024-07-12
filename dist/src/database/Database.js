"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    timezone: 'Z',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Breno12@',
    database: 'estudos_db',
    logging: false,
    entities: ['src/modules/**/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,
});
