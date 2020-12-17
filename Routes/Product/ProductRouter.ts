import {Router} from "express";
import {ProductHandler} from "./ProductHandler";

const ProductRouter:Router = Router({mergeParams : true});
const BaseRoute = '/products/:brand';

// To add new product
ProductRouter.post(BaseRoute, ProductHandler.addNewProduct)

// To get all products for a specific brand
ProductRouter.get(BaseRoute, ProductHandler.getAllProducts)

// To get specific product's details
ProductRouter.get(BaseRoute.concat('/:id'), ProductHandler.getProductDetails)


export {ProductRouter}