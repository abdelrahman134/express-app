const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express()
port=3000
app.set("view engine","hbs")
const elePath=path.join(__dirname,'../frontend/views')
console.log(elePath);
const constantPath = path.join(__dirname, "../frontend/partials");
console.log(constantPath);
    
    const publicDirectory = path.join(__dirname, "../frontend");
    app.use(express.static(publicDirectory));

app.set("views", elePath);
hbs.registerPartials(constantPath)
//   app.get("/", (req, res) => {
//     res.send("This is data in about Page ");
//   });
app.get('/',(req,res)=>{
    res.render("index", {
      title: "Home",
      desc: "this is home page",
      img_2: "img/img-1.jpg",
      logo: "img/logo.png",
      facebook: "img/facebook.png",
      ins: "img/instagram.png",
      twt: "img/twitter.png",
      phone: "img/viber.png",
    });
}) 
app.get("/service", (req, res) => {
  res.render("service", {
    title: "Service",
    logo: "img/logo.png",
    facebook: "img/facebook.png",
    ins: "img/instagram.png",
    twt: "img/twitter.png",
    phone: "img/viber.png",
    img: "img/img-4.jpg",
  });
});app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    logo: "img/logo.png",
    facebook: "img/facebook.png",
    ins: "img/instagram.png",
    twt: "img/twitter.png",
    phone: "img/viber.png",
  });
});app.get("/store", (req, res) => {
  res.render("store", {
    title: "store",
    logo: "img/logo.png",
    facebook: "img/facebook.png",
    ins: "img/instagram.png",
    twt: "img/twitter.png",
    phone: "img/viber.png",
    cart: "img/shopping-cart.png",
    product1: "img/shoe1.jpg",
    product2: "img/shoe2.jpg",
    product3: "img/shoe3.jpg",
  });
});app.get("/contact", (req, res) => {
  res.render("Contact", {
    title: "contact",
    logo: "img/logo.png",
    facebook: "img/facebook.png",
    ins: "img/instagram.png",
    twt: "img/twitter.png",
    phone: "img/viber.png",
  });
});
app.listen(port,()=>{
    console.log('port : 3000');
})