// backend/server.js
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const dataFilePath = "./data/data.js";

// Nuevo endpoint para agregar un pedido
app.post("/add-order", (req, res) => {
  try {
    const newOrder = req.body;
    const currentData = require(dataFilePath);
    currentData.push(newOrder);
    fs.writeFileSync(
      dataFilePath,
      `module.exports = ${JSON.stringify(currentData)}`,
      "utf-8"
    );
    res
      .status(200)
      .json({ success: true, message: "Order added successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding order." });
  }
});

// Nuevo endpoint para obtener todos los pedidos
app.get("/get-orders", (req, res) => {
  try {
    const orders = require(dataFilePath);
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving orders." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
