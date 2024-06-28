import { User } from "../entites/User"

export type UsersRepository = {
    insert(data: InsertUserDTO): Promise<void>
    updateById(userId: number, data: UpdateUserById): Promise<void>
    findById(userId: number): Promise<User | null>
}

export type UpdateUserById = {
    name?: string;
    email?: string;
    password?: string;
    document?: string;
    phone?: string;
}

export type InsertUserDTO = Omit<User, 'id'>;

export const usersRepositoryAlias = 'UsersRepository'