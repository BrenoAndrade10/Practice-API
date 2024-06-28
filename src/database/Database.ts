import { DataSource } from "typeorm";
import { User } from "../modules/users/entites/User";

export const myDataSource = new DataSource({
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
})