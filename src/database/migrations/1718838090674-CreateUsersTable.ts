import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateUsersTable1718838090674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    new TableColumn({
                        name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',         
                    }),
                    new TableColumn({
                        name: 'name',
                        type: 'varchar',
						length: '100',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'email',
                        type: 'varchar',
						length: '100',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'password',
                        type: 'varchar',
						length: '100',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'document',
                        type: 'varchar',
						length: '100',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'phone',
                        type: 'varchar',
						length: '100',
                        isNullable: false,
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
