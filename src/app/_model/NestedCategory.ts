import { Product } from './Product';

export interface NestedCategory {
    id?: number;
    image?: string;
    fkCategoryId:Number;
    products?:Product[];
}