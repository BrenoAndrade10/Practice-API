import { inject, singleton } from "tsyringe";
import { UseCase } from "../../../core/UseCase";
import { HashProvider, HashProviderAlias } from "../../../providers/hash/HashProvider";
import { UsersRepository, usersRepositoryAlias } from "../respositories/UsersRepository";
import { User } from "../entites/User";


export type AuthUserUseCaseInput = {
    email: string;
    password: string;
}

export type AuthUserUseCaseOutput = {
    user: User;
    token: string;
}


@singleton()
export class AuthUserUseCase implements UseCase<AuthUserUseCaseInput, AuthUserUseCaseOutput> {
    constructor(
        @inject(usersRepositoryAlias)
        private usersRepository: UsersRepository,

        @inject(HashProviderAlias)
        private hashProvider: HashProvider
    ) {}

    async execute(input: AuthUserUseCaseInput): Promise<AuthUserUseCaseOutput> {
        const user = await this.usersRepository.findByEmail(input.email);

        if (!user) {
            throw Error('USER_NOT_FOUND');
        }
        
        const passwordMatch = await this.hashProvider.verify(input.password, user!.password);

        if (!passwordMatch) {
            throw Error('PASSWORD_INCORRECT');
        }

        const { token } = User.generateAuthToken(user.id);
    
        return {
            user,
            token,
        }
    }
    
}