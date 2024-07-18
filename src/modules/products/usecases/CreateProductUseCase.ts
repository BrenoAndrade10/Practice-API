import { inject, singleton } from "tsyringe";
import { UseCase } from "../../../core/UseCase";
import { ProductsRepository, productsRepositoryAlias } from "../repositories/ProductsReposiotry";


export type CreateProductUseCaseInput = {
    product: string,
    description: string,
    price: number,
}

@singleton()
export class CreateProductUseCase implements UseCase<CreateProductUseCaseInput, void> {
    constructor(
        @inject(productsRepositoryAlias)
        private productsReposiotry: ProductsRepository
    ){}
    async execute(input: CreateProductUseCaseInput): Promise<void> {
        await this.productsReposiotry.insert({
            description: input.description,
            price: input.price,
            product: input.product
        })
    }
}