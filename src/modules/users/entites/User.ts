import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    email: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    password: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    document: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    phone: string;
}