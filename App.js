"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ProductRouter_1 = require("./Routes/Product/ProductRouter");
let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(ProductRouter_1.ProductRouter);
app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`); });
//# sourceMappingURL=App.js.map