import express = require('express');
import {ProductRouter} from "./Routes/Product/ProductRouter";

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(ProductRouter);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`);});
