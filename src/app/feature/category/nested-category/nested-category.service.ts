import { Category } from 'src/app/_model/Category';
import { NestedCategory } from 'src/app/_model/NestedCategory';

export class NestedCategoryService {
   
    nestedCategory: NestedCategory[];
    constructor() {
        //getproductbyNestedCategoryID //inject product service
        this.nestedCategory=[
            {id:1,image:"../../../../assets/images/LG-3.png",fkCategoryId:1,products:[]},
            {id:2,image:"../../../../assets/images/Toshiba2.png",fkCategoryId:1,products:[]},
            {id:3,image:"../../../../assets/images/panasonic.png",fkCategoryId:1,products:[]},
            {id:4,image:"../../../../assets/images/Sony.png",fkCategoryId:1,products:[]},

            {id:5,image:"../../../../assets/images/Apple.png",fkCategoryId:2,products:[]},
            {id:6,image:"../../../../assets/images/samsung2.png",fkCategoryId:2,products:[]},
            {id:7,image:"../../../../assets/images/Oppo.png",fkCategoryId:2,products:[]},
            {id:8,image:"../../../../assets/images/huawei.png",fkCategoryId:2,products:[]},
            

            {id:9,image:"../../../../assets/images/Miniso.png",fkCategoryId:3,products:[]},
            {id:10,image:"../../../../assets/images/AKG-Logo-2.png",fkCategoryId:3,products:[]},
            {id:11,image:"../../../../assets/images/Bose.png",fkCategoryId:3,products:[]},
            {id:12,image:"../../../../assets/images/audio-logo.png",fkCategoryId:3,products:[]},
            
            
        ]
    }
    getAll(): NestedCategory[] {
        return this.nestedCategory;
    }
    getById(id: Number): NestedCategory {
        return this.nestedCategory.find(a => a.id === id);
    }
    getByCategoryID(id:Number):NestedCategory[]{
        return this.nestedCategory.filter(a => a.fkCategoryId === id);
    }
}