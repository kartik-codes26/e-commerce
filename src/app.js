const express = require("express");
const productRouter= require("./routes/product.router")
const app= express();
const path = require("path")
const indexRouter = require("./routes/index.router")


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"../public")))


  // http://localhost:3000/   


app.use("/products",productRouter)
app.use("/",indexRouter)




const userRouter = require("./routes/user.router.js");
app.use("/", userRouter);  // 


const session = require("express-session");

app.use(session({
  secret: "secret-key", // use env var in production
  resave: false,
  saveUninitialized: false
}));


module.exports=app