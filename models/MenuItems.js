const mongoose = require("mongoose");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour", "salty"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_salses: {
    type: Number,
    default: 0,
  },
});

const MenuItems = mongoose.model("MenuItems", menuItemsSchema);
module.exports = MenuItems; ;
