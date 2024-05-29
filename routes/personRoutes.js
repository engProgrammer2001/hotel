const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.post("/", async (req, res) => {
  try {
    // assuming the request body contains the person data
    const data = req.body;
    // create a new person documtent using the mongoose model
    const newPerson = new Person(data);
    // save the newPerson to the database
    const response = await newPerson.save();
    console.log("data save successfull");

    // it wil return me on the console as a response
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// to get the person data
router.get("/", async (req, res) => {
  try {
    const personData = await Person.find(); // if i'll write fineOne so it will find only one data
    console.log("data get successfull");
    res.status(200).json(personData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// get person data acording to his post
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("data get successfull");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid workType" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// this is updata of the person data
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // exact the id from the URL parameter
    const UpdatedPersonData = req.body; // the data which we want to update
    const response = await Person.findByIdAndUpdate(
      personId,
      UpdatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    // check id is present in my data base or not
    if (!response) {
      return res.status(404).json({ error: "data not found" });
    }

    console.log("data update successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// this is for the delete of the person data
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // exact the id from the URL parameter which we want to delete
    const response = await Person.findByIdAndDelete(personId);
    // check id is present in my data base or not
    if (!response) {
      return res.status(404).json({ error: "data not found" });
    }
    console.log("delete successfully");
    res.status(200).json({ message: "Person data delete successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
