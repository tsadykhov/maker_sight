"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseClient_1 = require("../../Utils/DatabaseClient");
class ProductHandler {
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let brandName = req.params.brand;
            try {
                res.status(200).send(yield DatabaseClient_1.DatabaseClient.getBrandProduct(brandName));
            }
            catch (e) {
                console.log(e.stack);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    static getProductDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                res.status(200).send(yield DatabaseClient_1.DatabaseClient.getProductDetails(id));
            }
            catch (e) {
                console.log(e.stack);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    static addNewProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, price, parentProducts, childProducts } = req.body;
                let { brand } = req.params;
                if (!name)
                    res.status(400).send("Product Must Have a Name");
                if (!price)
                    res.status(400).send("Product Must Have a Price");
                yield DatabaseClient_1.DatabaseClient.addProduct(brand, name, price, parentProducts, childProducts);
                res.status(200).send("Product Added Successfully");
            }
            catch (e) {
                console.log(e.stack);
                res.status(500).send("Internal Server Error");
            }
        });
    }
}
exports.ProductHandler = ProductHandler;
//# sourceMappingURL=ProductHandler.js.map