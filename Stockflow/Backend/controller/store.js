const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
  try {
    console.log(req.body);
    
    // Create a new store instance without the image field
    const newStore = new Store({
      userID: req.body.userId,
      name: req.body.name,
      category: req.body.category,
      address: req.body.address,
      city: req.body.city,
      // image: req.body.image  // Removed if not needed
    });

    // Save the new store to the database
    const result = await newStore.save();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: "Failed to add store" });
  }
};

// Get All Stores
const getAllStores = async (req, res) => {
  try {
    const userID = req.params.userID;
    const findAllStores = await Store.find({ userID }).sort({ _id: -1 }); // -1 for descending
    res.json(findAllStores);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to retrieve stores" });
  }
};

module.exports = { addStore, getAllStores };
