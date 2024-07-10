import { find } from "../../../../core/DependencyInjection";
import { HashProvider, HashProviderAlias } from "../../../../providers/hash/HashProvider";
import { User } from "../../entites/User";
import { UsersRepository, usersRepositoryAlias } from "../../respositories/UsersRepository";
import { AuthUserUseCase, AuthUserUseCaseInput } from "../AuthUserUseCase";

const usersRepo = find<UsersRepository>(usersRepositoryAlias);
const hashProvider = find<HashProvider>(HashProviderAlias);
const usecase = find(AuthUserUseCase);

const mockUsecase: AuthUserUseCaseInput = {
    email: 'abc@gmail.com',
    password: '1234567'
}

it('should return USER_NOT_FOUND', async () => {
    jest.spyOn(usersRepo, 'findByEmail').mockResolvedValue(null);

    try {
        await usecase.execute(mockUsecase);
    } catch(err) {   
        expect(err.message).toBe('USER_NOT_FOUND');
    }
});

it('should return PASSWORD_INCORRECT', async () => {
    jest.spyOn(usersRepo, 'findByEmail').mockResolvedValue({ id: 1, password: 'Breno12@' } as User);

    try {
        await usecase.execute(mockUsecase);
    } catch(err) {   
        expect(err.message).toBe('PASSWORD_INCORRECT');
    }

    expect(usersRepo.findByEmail).toHaveBeenCalledTimes(1);
    expect(usersRepo.findByEmail).toHaveBeenCalledWith(mockUsecase.email);
});

it('should auth user', async () => {
    jest.spyOn(usersRepo, 'findByEmail').mockResolvedValue({ id: 1, password: '1234567' } as User);
    jest.spyOn(hashProvider, 'verify').mockResolvedValue(true);

    await usecase.execute(mockUsecase);

    expect(usersRepo.findByEmail).toHaveBeenCalledTimes(1);
    expect(usersRepo.findByEmail).toHaveBeenCalledWith(mockUsecase.email);

    expect(hashProvider.verify).toHaveBeenCalledTimes(1);
    expect(hashProvider.verify).toHaveBeenCalledWith(mockUsecase.password, '1234567');
});

