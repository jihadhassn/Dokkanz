import { Category } from 'src/app/_model/Category';
import { NestedCategory } from 'src/app/_model/NestedCategory';
import { NestedCategoryService } from './nested-category/nested-category.service';

export class CategoryService {
    categorys: Category[];
    // nestedCategory: NestedCategory[];
    constructor() {

        //getNestedCategoryByCategoryID

        this.categorys = [
            { id: 1, name: "TVs", description: "Logan is my oldest friend. He is charming, responsible, quirky, God-loving, and heartfelt all in one package. I was introduced to this awesome dude for the first time ever on an impromptu trip to the local…", image: "http://demo.hasthemes.com/limupa-v3/limupa/images/product/large-size/1.jpg",subcategories: []},
            { id: 2, name: "Mobiles", description: "Logan is my oldest friend. He is charming, responsible, quirky, God-loving, and heartfelt all in one package. I was introduced to this awesome dude for the first time ever on an impromptu trip to the local…", image: "http://demo.hasthemes.com/limupa-v3/limupa/images/product/large-size/9.jpg", subcategories: [] },
            { id: 3, name: "HeadPhones", description: "Logan is my oldest friend. He is charming, responsible, quirky, God-loving, and heartfelt all in one package. I was introduced to this awesome dude for the first time ever on an impromptu trip to the local…", image: "http://demo.hasthemes.com/limupa-v3/limupa/images/product/large-size/6.jpg", subcategories: [] }

        ]
    }
    getAll(): Category[] {
        return this.categorys;
    }
    getById(id:Number):Category{
        return this.categorys.find(a=>a.id===id);
    }
    add(category: Category) {
        category.id = this.categorys.length + 1;
        this.categorys.push(category);
    }
    update(category: Category) {
        const i = this.categorys.indexOf(this.getById(category.id));
        this.categorys[i] = category;
    }
    delete(id: Number) {
        const i=this.categorys.findIndex(a=>a.id===id);
        this.categorys.splice(i,1);
    }
}