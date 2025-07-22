const express = require("express");
const productRouter= require("./routes/product.router")
const app= express();

app.use("/",productRouter)

module.exports=app