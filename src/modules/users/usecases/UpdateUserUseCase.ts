import { inject, singleton } from "tsyringe";
import { UseCase } from "../../../core/UseCase";
import { UsersRepository, usersRepositoryAlias } from "../respositories/UsersRepository";

export type UpdateUserUseCaseInput = {
    name?: string;
    email?: string;
    password?: string;
    document?: string;
    phone?: string;
    userId: number;
}

@singleton()
export class UpdateUserUseCase implements UseCase<UpdateUserUseCaseInput, void> {
    constructor(
        @inject(usersRepositoryAlias)
        private usersRepository: UsersRepository
    ){}

    async execute(input: UpdateUserUseCaseInput): Promise<void> {
        const user = await this.usersRepository.findById(input.userId);

        if (!user) {
            throw Error('USER_NOT_FOUND');
        }

        await this.usersRepository.updateById(input.userId!, {
            name: input.name,
            document: input.document,
            email: input.email,
            phone: input.phone,
            password: input.password,
        })
    }
}