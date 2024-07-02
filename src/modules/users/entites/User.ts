import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { JwtProvider, jwtProviderAlias } from "../../../providers/jwt/JwtProvider";
import { find } from "../../../core/DependencyInjection";

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

    static generateAuthToken(userId: number): UserAuthData {
        const jwtProvide = find<JwtProvider>(jwtProviderAlias);

        return jwtProvide.generate({
            subject: userId.toString(),
        });  
    }
}

export type UserAuthData = {
    token: string;
}