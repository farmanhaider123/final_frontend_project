const express = require("express");
const app = express();
const { createOrder } = require("./controllers/order");
const { addAddress, getAddresses } = require("./controllers/address");
const { User, validateUser } = require("./models/user");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
const {
  saveProduct,
  searchProducts,
  getProductCategories,
  getProductById,
  updateProductDetails,
  deleteProduct
} = require("./controllers/product");
const router = express.Router();
const { signUp, signIn,getuserById } = require("./controllers/auth");
const admin = require("./middleware/admin");
const auth = require("./middleware/auth");
const multer = require('multer');
const { USER } = require("./constants");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//activation
router.get("/api/v1/act/:id", (req, res) => {

     let pid = req.params.id;
  console.log(pid);
User
    .findOne({ email: pid }) //findAndModify
    .then((result) => {
        console.log(`result${result}`);
        User.findOneAndUpdate({email: pid }, { $set: { status:true } })
        .then((data1) => {
         res.render("activate");
                  
        })

        
    })
    .catch((err) => console.log(err));
    // User.findOne({email:email}).then((data) => {
    //     console.log(data)
    //      User.findOneAndUpdate({email:email}, { $set: { status:true } })
    //     .then((data1) => {
    //       res.send({"err":0,"msg":"Account is activated sucessfully"});
    //     })
    //     .catch((err) => {
    //       res.send("something went wrong");
    //     });
    })


     

//Auth
router.post("/api/v1/users", signUp);
router.post("/api/v1/auth", signIn);
router.get("/api/v1/getuserbyid/:id",getuserById );

//Address
router.post("/api/v1/addresses", auth, addAddress);
router.get("/api/v1/addresses", auth, getAddresses);

//Product
router.post("/api/v1/products",upload.single('attach'),saveProduct);
router.get("/api/v1/products", searchProducts);
router.get("/api/v1/products/categories", getProductCategories);
router.get("/api/v1/products/:id", getProductById);
router.put("/api/v1/products/:id", updateProductDetails);
router.delete("/api/v1/products/:id", deleteProduct);

//Order
router.post("/api/v1/orders", auth, createOrder);

module.exports = router;
