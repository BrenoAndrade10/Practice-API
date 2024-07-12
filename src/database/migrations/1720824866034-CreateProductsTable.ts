import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateProductsTable1720823092328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
        new Table({
            name: 'products',
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',   
                }),
                new TableColumn({
                    name: 'product',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'price',
                    type: 'int',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'description',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                }),
                new TableColumn({
                    name: 'createdAt',
                    type: 'datetime',
                    default: 'now()',
                }),
                new TableColumn({
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'now()',
                    onUpdate: 'CURRENT_TIMESTAMP',
                }),
            ]
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
		console.log('This migration is not reversible');
    }

}

