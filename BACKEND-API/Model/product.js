const mangoose = require("mongoose");
const proSchema = new mangoose.Schema({
  category: { type: String, required: true },
  pname: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
module.exports = mangoose.model("product", proSchema);
