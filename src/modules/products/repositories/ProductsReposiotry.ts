import { Product } from "../entities/Product";

export type ProductsRepository = {
    insert(data: InsertProductDTO): Promise<void>;
}

export type InsertProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export const productsRepositoryAlias = 'ProductsRepository';