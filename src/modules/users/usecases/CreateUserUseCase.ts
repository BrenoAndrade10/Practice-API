import { inject, injectable, singleton } from "tsyringe";
import { UseCase } from "../../../core/UseCase";
import { UsersRepository, usersRepositoryAlias } from "../respositories/UsersRepository";

export type CreateUserUseCaseInput = {
    name: string;
    email: string;
    password: string;
    document: string;
    phone: string;
}


@injectable()
export class CreateUserUseCase implements UseCase<CreateUserUseCaseInput, void> {
    constructor(
        @inject(usersRepositoryAlias)
        private usersRepository: UsersRepository
    ){}
    async execute(input: CreateUserUseCaseInput): Promise<void> {
        await this.usersRepository.insert({
            document: input.document,
            email: input.email,
            name: input.name,
            password: input.password,
            phone: input.phone
        })
    }
}