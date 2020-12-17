"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductHandler_1 = require("./ProductHandler");
const ProductRouter = express_1.Router({ mergeParams: true });
exports.ProductRouter = ProductRouter;
const BaseRoute = '/products/:brand';
// To add new product
ProductRouter.post(BaseRoute, ProductHandler_1.ProductHandler.addNewProduct);
// To get all products for a specific brand
ProductRouter.get(BaseRoute, ProductHandler_1.ProductHandler.getAllProducts);
// To get specific product's details
ProductRouter.get(BaseRoute.concat('/:id'), ProductHandler_1.ProductHandler.getProductDetails);
//# sourceMappingURL=ProductRouter.js.map