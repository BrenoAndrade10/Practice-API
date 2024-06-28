// import { find } from '../../../../core/DependencyInjection'
// import { User } from '../../entites/User';
// import { UsersRepository, usersRepositoryAlias } from '../../respositories/UsersRepository';
// import { UpdateUserUseCase, UpdateUserUseCaseInput } from "../UpdateUserUseCase";


// const usecase = find(UpdateUserUseCase);
// const usersRepo = find<UsersRepository>(usersRepositoryAlias);


// const userInsertMock: UpdateUserUseCaseInput = {
//     document: '20237207702',
//     email: 'augustobreno2207@gmail.com',
//     name: 'Breno',
//     phone: '24999853372',
//     userId: 1,
// }

// it('should throw erro USER_NOT_FOUND', async () => {
//     jest.spyOn(usersRepo, 'findById').mockResolvedValue(null);

//     try {
//         await usecase.execute(userInsertMock);
//     } catch (error) {
//         expect(error.message).toBe('USER_NOT_FOUND');
//     }

//     expect(usersRepo.findById).toHaveBeenCalledTimes(1);
//     expect(usersRepo.findById).toHaveBeenCalledWith(1);
// });

// it('should update an user', async () => {
//     jest.spyOn(usersRepo, 'findById').mockResolvedValue({ id: 1 } as User);
//     jest.spyOn(usersRepo, 'updateById').mockResolvedValue();

//     await usecase.execute(userInsertMock);

//     expect(usersRepo.findById).toHaveBeenCalledTimes(1);
//     expect(usersRepo.findById).toHaveBeenCalledWith(1);

//     expect(usersRepo.updateById).toHaveBeenCalledTimes(1);
//     expect(usersRepo.updateById).toHaveBeenCalledWith(1, {
//         document: '20237207702',
//         email: 'augustobreno2207@gmail.com',
//         name: 'Breno',
//         phone: '24999853372',
//     });

// });