import { inject, injectable, singleton } from "tsyringe";
import { UseCase } from "../../../core/UseCase";
import { UsersRepository, usersRepositoryAlias } from "../respositories/UsersRepository";
import { HashProvider, HashProviderAlias } from "../../../providers/HashProvider";

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
        private usersRepository: UsersRepository,

        @inject(HashProviderAlias)
        private hashProvider: HashProvider
    ){}
    async execute(input: CreateUserUseCaseInput): Promise<void> {
        const passwordHashed = await this.hashProvider.hash(input.password)

        await this.usersRepository.insert({
            document: input.document,
            email: input.email,
            name: input.name,
            password: passwordHashed,
            phone: input.phone
        })
    }
}