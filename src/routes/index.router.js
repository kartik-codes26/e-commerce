// index.router.js
const express = require("express");
const productModel = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await productModel.find();
    res.render("index", { products, title: "Home Page" });
});

router.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
});

router.get("/register", (req, res) => {
    res.render("register", { title: "Register" });
});

module.exports = router;
