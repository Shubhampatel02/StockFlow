const express = require("express");
const app = express();
const product = require("../controller/product");


app.post("/add", product.addProduct);


app.get("/get/:userId", product.getAllProducts);

app.get("/delete/:id", product.deleteSelectedProduct);


app.post("/update", product.updateSelectedProduct);

app.get("/search", product.searchProduct);



module.exports = app;
