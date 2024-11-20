const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error("Could not connect to MongoDB Atlas:", error));

// mongoose.connect("mongodb://localhost:27017/AlphaFood")
// .then(() => console.log("Connected to MongoDB"))
// .catch((error) => console.error("Could not connect to MongoDB:", error));

const foodSchema = new mongoose.Schema({
  id: String,
  name: String,
  rating: String,
  img: String,
  price: Number, 
  tax: Number, 
  quantity: Number, 
  subtotal: Number,
});

const foodData = mongoose.model("Food", foodSchema);

app.get("/api/foods", async (req, res) => {
  try {
    const foods = await foodData.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching food data" });
  }
});

app.post("/api/foods", async (req, res) => {
  const newFood = new foodData(req.body);
  try {
    await newFood.save();
    res.status(201).json({ newFood });
  } catch (error) {
    console.error("Error saving food data:", error);
    res.status(500).json({ message: "Error saving food data" });
  }
});

app.delete("/api/foods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await foodData.findOneAndDelete({ id });
    if (deletedFood) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting food data:", error);
    res.status(500).json({ message: "Error deleting food data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
