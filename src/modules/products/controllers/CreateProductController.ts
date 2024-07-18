import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import * as yup from 'yup';
import { CreateProductUseCase } from "../usecases/CreateProductUseCase";

@injectable()
export class CreateProductController {
    constructor(
        @inject(CreateProductUseCase)
        private createProductUseCase: CreateProductUseCase
    ){}

    private bodySchema = yup.object().shape({
        price: yup.number().required(),
        description: yup.string().required(),
        product: yup.string().required(),
    })


    async handle(req: Request, res: Response): Promise<Response> {
        const body = await this.bodySchema.validate(req.body, { abortEarly: false });

        await this.createProductUseCase.execute({ ...body })


        return res.status(200).send({
            status: 'SUCCESS'
        })
    }
}