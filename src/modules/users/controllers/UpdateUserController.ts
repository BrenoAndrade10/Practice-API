import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import * as yup from 'yup';
import { UpdateUserUseCase } from "../usecases/UpdateUserUseCase";


@injectable()
export class UpdateUserController {
    constructor(
        @inject(UpdateUserUseCase)
        private updateUserUseCase: UpdateUserUseCase
    ){}

    private bodySchema = yup.object().shape({
        name: yup.string().optional(),
        password: yup.string().optional(),
        phone: yup.string().optional(),
        email: yup.string().optional(),
        document: yup.string().optional(),
    })

    async handle(req: Request, res: Response): Promise<Response> {
        const body = await this.bodySchema.validate(req.body, { abortEarly: false });

        const userId  = req.user!.id;
        
        await this.updateUserUseCase.execute({ ...body, userId });

        return res.status(200).send();
    }
}