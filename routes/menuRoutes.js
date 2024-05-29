const express = require("express");
const router = express.Router();
const MenuItems = require("../models/MenuItems.js");

// to get the menu data
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItems(data);
    const response = await newMenu.save();
    console.log("data save successfull");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// to get the MenuItems data
router.get("/", async (req, res) => {
  try {
    const menuData = await MenuItems.find();
    console.log("data get successfull");
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// get data according to taste
router.get("/:taste", async (req, res) => {
  const taste = req.params.taste;
  try {
    if (
      taste == "sweet" ||
      taste == "salty" ||
      taste == "spicy" ||
      taste == "sour"
    ) {
      const response = await MenuItems.find({ taste: taste });
      console.log("taste get successfull");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// this is updata of the menu data
router.put("/:id", async (req, res)=>{
  try {
    const menuId = req.params.id; // exact the id from the URL parameter
    const UpdatedmenuData = req.body; // the data which we want to update
    const response = await MenuItems.findByIdAndUpdate(menuId, UpdatedmenuData, {
      new: true,
      runValidators: true,
    });
    if(!response){
      res.status(404).json({message:"Items not found"});
    }
    console.log("update successfully");
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
})

// delete menu items 
router.delete("/:id", async (req,res)=>{
  try {
    const menuId = req.params.id; // exact menu id which we want to delet
    const response = await MenuItems.findByIdAndDelete(menuId);

    // check if id is not present in the data base
    if(!response){
      res.status(404).json({message:"data is not found"});
    }

    console.log("deleted successfully");
    res.status(200).json({message:"MenuItems Deleted successfully"});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
})


// comment added for testing purpose

module.exports = router;
