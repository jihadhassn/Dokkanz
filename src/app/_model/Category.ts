import { NestedCategory } from './NestedCategory';

export interface Category {
    id?: number;
    name?: string;
    image?:string;
    description?:string;
    subcategories?:NestedCategory[];
    // fkSunCategoriesID?:Number;
}