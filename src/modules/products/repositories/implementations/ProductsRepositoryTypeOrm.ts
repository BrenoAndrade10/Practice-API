import { InsertProductDTO, ProductsRepository } from "../ProductsReposiotry";
import { myDataSource } from "../../../../database/Database";
import { Product } from "../../entities/Product";



export class ProductsRepositoryTypeOrm implements ProductsRepository {
    private repository = myDataSource.getRepository(Product);

    async insert(data: InsertProductDTO): Promise<void> {
        await this.repository.insert(data)
    }
}