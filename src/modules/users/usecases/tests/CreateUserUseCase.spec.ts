// import { find } from "../../../../core/DependencyInjection";
// import { UsersRepository, usersRepositoryAlias } from "../../respositories/UsersRepository";
// import { CreateUserUseCase, CreateUserUseCaseInput } from "../CreateUserUseCase";

// const usecase = find(CreateUserUseCase);
// const usersRepo = find<UsersRepository>(usersRepositoryAlias);

// const userInsertMock: CreateUserUseCaseInput = {
//     document: '20237207702',
//     email: 'augustobreno2207@gmail.com',
//     name: 'Breno',
//     password: 'Breno12@',
//     phone: '24999853372'
// }

// it('should create an new user', async () => {
//     jest.spyOn(usersRepo, 'insert').mockResolvedValue();

//     await usecase.execute(userInsertMock)

//     expect(usersRepo.insert).toHaveBeenCalledTimes(1);
//     expect(usersRepo.insert).toHaveBeenCalledWith(userInsertMock);
// }); 