import { Category } from 'src/app/_model/Category';
import { Product } from 'src/app/_model/Product';
import { NestedCategoryService } from '../category/nested-category/nested-category.service';
import { NestedCategory } from 'src/app/_model/NestedCategory';


export class ProductService {
    products: Product[];
    // nestedCategory: NestedCategory;
    
    constructor(private nestedID: NestedCategoryService) {
        // this.nestedCategory=this.nestedID.getById(1);
        this.products = [
            //TV
            //LG
            {
                id: 1, name: "LG 43 InchSmart TV", image: "https://cf4.s3.souqcdn.com/item/2018/05/23/35/15/84/40/item_L_35158440_136920634.jpg", price: 5.735,
                code: "#123F", fkNestedCategoryId: 1
            },
            {
                id: 2, name: "LG 32 Inch HD LED Smart TV", image: "https://cf2.s3.souqcdn.com/item/2017/06/05/22/99/78/88/item_L_22997888_32297145.jpg", price: 3.666,
                code: "#2007", fkNestedCategoryId: 1
            },
            {
                id: 3, name: "LG 43 InchSmart TV", image: "https://cf3.s3.souqcdn.com/item/2018/01/29/30/45/26/51/item_XL_30452651_102296362.jpg", price: 53.3005,
                code: "#FF007", fkNestedCategoryId: 1
            },
            {
                id: 4, name: "LG 43 InchSmart TV", image: "https://cf4.s3.souqcdn.com/item/2018/05/23/35/15/84/40/item_L_35158440_136920634.jpg", price: 5.735,
                code: "#123F", fkNestedCategoryId: 1
            },
            {
                id: 5, name: "LG 32 Inch HD LED Smart TV", image: "https://cf2.s3.souqcdn.com/item/2017/06/05/22/99/78/88/item_L_22997888_32297145.jpg", price: 3.666,
                code: "#2007", fkNestedCategoryId: 1
            },
            {
                id: 6, name: "LG 43 InchSmart TV", image: "https://cf3.s3.souqcdn.com/item/2018/01/29/30/45/26/51/item_XL_30452651_102296362.jpg", price: 53.3005,
                code: "#FF007", fkNestedCategoryId: 1
            },
            // Toshipa
            {
                id: 7, name: "Toshiba 55 Inch LED Android TV Black", image: "https://m.media-amazon.com/images/I/51YuCsXqCcL._AC_UL436_.jpg", price: 1.999,
                code: "#T123", fkNestedCategoryId: 2
            },
            {
                id: 8, name: "Toshiba Smart TV 4K Ultra HD LED", image: "https://m.media-amazon.com/images/I/71pXy2ua06L._AC_UL436_.jpg", price: 2.999,
                code: "#TFFF", fkNestedCategoryId: 2
            },
            {
                id: 9, name: "Toshiba 49 Inch 4K UHD, LED Smart TV, Black,", image: "https://m.media-amazon.com/images/I/51Y8R5G4srL._AC_UL436_.jpg", price: 1.254,
                code: "#T852", fkNestedCategoryId: 2
            },
            {
                id: 10, name: "Toshiba 55 Inch LED Android TV Black", image: "https://m.media-amazon.com/images/I/51YuCsXqCcL._AC_UL436_.jpg", price: 1.999,
                code: "#T123", fkNestedCategoryId: 2
            },
            {
                id: 11, name: "Toshiba Smart TV 4K Ultra HD LED", image: "https://m.media-amazon.com/images/I/71pXy2ua06L._AC_UL436_.jpg", price: 2.999,
                code: "#TFFF", fkNestedCategoryId: 2
            },
            {
                id: 12, name: "Toshiba 49 Inch 4K UHD, LED Smart TV, Black,", image: "https://m.media-amazon.com/images/I/51Y8R5G4srL._AC_UL436_.jpg", price: 1.254,
                code: "#T852", fkNestedCategoryId: 2
            },

            //Mobiles
            //Apple
            {
                id: 13, name: "Apple iPhone 7 with FaceTime", image: "https://m.media-amazon.com/images/I/41wTYNCA5aL._AC_UL436_.jpg", price: 12.999,
                code: "#IP123", fkNestedCategoryId: 5
            },
            {
                id: 14, name: "Apple iPhone XS With Facetime", image: "https://m.media-amazon.com/images/I/71JxqUq1tyL._AC_UL436_.jpg", price: 24.965,
                code: "#IPFFF", fkNestedCategoryId: 5
            },
            {
                id: 15, name: "Apple iPhone 8 with FaceTime", image: "https://m.media-amazon.com/images/I/51SiUpq15dL._AC_UL436_.jpg", price: 20.254,
                code: "#IP852", fkNestedCategoryId: 5
            },
            {
                id: 16, name: "Apple iPhone 7 with FaceTime", image: "https://m.media-amazon.com/images/I/41wTYNCA5aL._AC_UL436_.jpg", price: 12.999,
                code: "#IP123", fkNestedCategoryId: 5
            },
            {
                id: 17, name: "Apple iPhone XS With Facetime", image: "https://m.media-amazon.com/images/I/71JxqUq1tyL._AC_UL436_.jpg", price: 24.965,
                code: "#IPFFF", fkNestedCategoryId: 5
            },
            {
                id: 18, name: "Apple iPhone 8 with FaceTime", image: "https://m.media-amazon.com/images/I/51SiUpq15dL._AC_UL436_.jpg", price: 20.254,
                code: "#IP852", fkNestedCategoryId: 5
            },

            //Samsunge
            {
                id: 19, name: "Samsung Galaxy S5-16GB", image: "https://m.media-amazon.com/images/I/512dO4GFd3L._AC_UL436_.jpg", price: 2.555,
                code: "#SA123", fkNestedCategoryId: 6
            },
            {
                id: 20, name: "Samsung Galaxy S8 Dual Sim", image: "https://m.media-amazon.com/images/I/418tb5Nj4vL._AC_UL436_.jpg", price: 6.115,
                code: "#SAFFF", fkNestedCategoryId: 6
            },
            {
                id: 21, name: "Samsung Galaxy A5 (2017) Dual ", image: "https://m.media-amazon.com/images/I/51ROq1FQSbL._AC_UL436_.jpg", price: 2.999,
                code: "#SA852", fkNestedCategoryId: 6
            },
            {
                id: 22, name: "Samsung Galaxy S5-16GB", image: "https://m.media-amazon.com/images/I/512dO4GFd3L._AC_UL436_.jpg", price: 2.555,
                code: "#SA123", fkNestedCategoryId: 6
            },
            {
                id: 23, name: "Samsung Galaxy S8 Dual Sim", image: "https://m.media-amazon.com/images/I/418tb5Nj4vL._AC_UL436_.jpg", price: 6.115,
                code: "#SAFFF", fkNestedCategoryId: 6
            },
            {
                id: 24, name: "Samsung Galaxy A5 (2017) Dual ", image: "https://m.media-amazon.com/images/I/51ROq1FQSbL._AC_UL436_.jpg", price: 2.999,
                code: "#SA852", fkNestedCategoryId: 6
            },

            //HeadPhone
            //MINISO
            {
                id: 25, name: "Comfortable Headphone Model HM094", image: "https://m.media-amazon.com/images/I/41EWuOk8i9L._AC_UL436_.jpg", price: 300,
                code: "#MNI123", fkNestedCategoryId: 9
            },
            {
                id: 26, name: "Wireless Bluetooth Wireless Headband Headset", image: "https://m.media-amazon.com/images/I/31fns+SGlaL._AC_UL436_.jpg", price: 100,
                code: "#MNIFFF", fkNestedCategoryId: 9
            },
            {
                id: 27, name: "Miniso 2503 Earphone, Brown", image: "https://m.media-amazon.com/images/I/61aVoZP8MFL._AC_UL436_.jpg", price: 83,
                code: "#MNI852", fkNestedCategoryId: 9
            },
            {
                id: 28, name: "Comfortable Headphone Model HM094", image: "https://m.media-amazon.com/images/I/41EWuOk8i9L._AC_UL436_.jpg", price: 300,
                code: "#MNI123", fkNestedCategoryId: 9
            },
            {
                id: 29, name: "Wireless Bluetooth Wireless Headband Headset", image: "https://m.media-amazon.com/images/I/31fns+SGlaL._AC_UL436_.jpg", price: 100,
                code: "#MNIFFF", fkNestedCategoryId: 9
            },
            {
                id: 30, name: "Miniso 2503 Earphone, Brown", image: "https://m.media-amazon.com/images/I/61aVoZP8MFL._AC_UL436_.jpg", price: 83,
                code: "#MNI852", fkNestedCategoryId: 9
            },
            //BOSE
            {
                id: 31, name: "AKG Bluetooth Headphone Black", image: "https://m.media-amazon.com/images/I/71R3tXkCO0L._AC_UL436_.jpg", price: 800,
                code: "#AKG123", fkNestedCategoryId: 10
            },
            {
                id: 32, name: "AKG Noise Cancelling Headphones", image: "https://m.media-amazon.com/images/I/71kfR-tn1LL._AC_UL436_.jpg", price: 500,
                code: "#AKGFFF", fkNestedCategoryId: 10
            },
            {
                id: 33, name: "AKG K72 CLOSED-BACK STUDIO HEADPHONES", image: "https://m.media-amazon.com/images/I/31XrWNveG5L._AC_UL436_.jpg", price: 300,
                code: "#AKG852", fkNestedCategoryId: 10
            },
            {
                id: 34, name: "AKG Bluetooth Headphone Black", image: "https://m.media-amazon.com/images/I/71R3tXkCO0L._AC_UL436_.jpg", price: 800,
                code: "#AKG123", fkNestedCategoryId: 10
            },
            {
                id: 35, name: "AKG Noise Cancelling Headphones", image: "https://m.media-amazon.com/images/I/71kfR-tn1LL._AC_UL436_.jpg", price: 500,
                code: "#AKGFFF", fkNestedCategoryId: 10
            },
            {
                id: 36, name: "AKG K72 CLOSED-BACK STUDIO HEADPHONES", image: "https://m.media-amazon.com/images/I/31XrWNveG5L._AC_UL436_.jpg", price: 300,
                code: "#AKG852", fkNestedCategoryId: 10
            },

        ]
    }
    getAll(): Product[] {
        return this.products;
    }
    getById(id: Number): Product {
        return this.products.find(a => a.id === id);
    }
    add(product: Product) {
        product.id = this.products.length + 1;
        // console.log(this.products.length);
        this.products.push(product);
    }
    update(product: Product) {
        const i = this.products.indexOf(this.getById(product.id));
        this.products[i] = product;
    }
    delete(id: Number) {
        const i = this.products.findIndex(a => a.id === id);
        this.products.splice(i, 1);
    }
    getAllByNestedCategoryID(id: Number): Product[] {
        return this.products.filter(a => a.fkNestedCategoryId === id);
    }

}