interface IProductModel {
    id:string;
    name:string;
    brand: string;
    parentProducts: string[];
    childProducts: string[];
    price: number;
}

export {IProductModel}