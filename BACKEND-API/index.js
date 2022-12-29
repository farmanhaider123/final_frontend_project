const express = require("express");
const {
  Saveproduct,
  Getallproducts,
  editProductPage,
  deleteProduct,
  getProductById,
  updateData,
} = require("./Controller/productcontroller");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index1", { Title: "Crud application", prods: "" });
});
router.get("/addproduct", (req, res) => {
  res.render("add");
});
router.get("/edit/:id", editProductPage);
router.get("/getProductById/:id", getProductById);
router.put("/editD/:id", updateData);
router.post("/addedproduct", Saveproduct);
//router.get("/getproductbyid/:id", Getproductbyid);
router.get("/getproducts", Getallproducts);
router.delete("/deleteDATA/:id", deleteProduct);
module.exports = router;
