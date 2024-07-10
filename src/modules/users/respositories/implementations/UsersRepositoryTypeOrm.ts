import { myDataSource } from "../../../../database/Database";
import { User } from "../../entites/User";
import { InsertUserDTO, UpdateUserById, UsersRepository } from "../UsersRepository";


export class UsersRepositoryTypeOrm implements UsersRepository {
    private repository = myDataSource.getRepository(User);

    async insert(data: InsertUserDTO): Promise<void> {
        await this.repository.insert(data);
    }
    
    async updateById(userId: number, data: UpdateUserById): Promise<void> {
        await this.repository.update(userId, data);
    }

    async findById(userId: number): Promise<User | null> {
        return this.repository.findOneBy({ id: userId });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.repository.findOneBy({ email });
    }
}