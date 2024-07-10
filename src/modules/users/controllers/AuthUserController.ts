import { inject, injectable } from "tsyringe";
import * as yup from 'yup';
import { Request, Response } from 'express';
import { AuthUserUseCase } from "../usecases/AuthUserUseCase";





@injectable()
export class AuthUserController {
    constructor(
        @inject(AuthUserUseCase)
        private authUserUseCase: AuthUserUseCase
    ){}

    private bodySchema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
    })

    async handle(req: Request, res: Response): Promise<Response> {
        const body = await this.bodySchema.validate(req.body, { abortEarly: false })

        const response = await this.authUserUseCase.execute({...body});

        return res.status(200).send({
            status: 'SUCCESS',
            result: response
        })
    }
}