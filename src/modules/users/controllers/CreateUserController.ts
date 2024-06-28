import { Request, Response } from 'express';
import { container, inject, injectable, singleton } from 'tsyringe';
import * as yup from 'yup';
import { CreateUserUseCase } from '../usecases/CreateUserUseCase';


@singleton()
export class CreateUserController {
    constructor(
        @inject(CreateUserUseCase) 
        private createUserUseCase: CreateUserUseCase
    ) {}
    private bodySchema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required(),
        document: yup.string().required(),
    })

    async handle(req: Request, res: Response): Promise<Response> {
        const body = await this.bodySchema.validate(req.body, { abortEarly: false });

        await this.createUserUseCase.execute({
            ...body
        });

        return res.status(201).send();
    }
}