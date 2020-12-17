import {Request, Response} from "express";
import {DatabaseClient} from "../../Utils/DatabaseClient";

class ProductHandler {

    static async getAllProducts(req: Request, res: Response) {
        let brandName:string = req.params.brand;
        try {
            res.status(200).send(await DatabaseClient.getBrandProduct(brandName));
        }
        catch (e) {
            console.log(e.stack);
            res.status(500).send("Internal Server Error");
        }

    }

    static async getProductDetails(req: Request, res: Request){
        try {
            let id:string = req.params.id;
            res.status(200).send(await DatabaseClient.getProductDetails(id));
        }
        catch (e) {
            console.log(e.stack)
            res.status(500).send("Internal Server Error");
        }
    }


    static async addNewProduct(req: Request, res: Response) {
        try {
            let {name, price, parentProducts, childProducts} = req.body;
            let {brand} = req.params;
            if (!name)
                res.status(400).send("Product Must Have a Name");
            if (!price)
                res.status(400).send("Product Must Have a Price");

            await DatabaseClient.addProduct(brand, name, price, parentProducts, childProducts);

            res.status(200).send("Product Added Successfully");

        }
        catch (e) {
            console.log(e.stack)
            res.status(500).send("Internal Server Error");
        }

    }


}

export {ProductHandler}