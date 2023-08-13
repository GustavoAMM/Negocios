const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const dataFilePath = "./data/data.js";

function generateUniqueId(existingIds) {
  let id;
  do {
    id = Math.floor(Math.random() * 100000);
  } while (existingIds.includes(id));
  return id;
}

app.post("/add-order", (req, res) => {
  try {
    const newOrder = req.body;
    const currentData = require(dataFilePath);

    // Generar un ID único
    const existingIds = currentData.map(order => order.id);
    const uniqueId = generateUniqueId(existingIds);

    // Agregar el ID único al nuevo pedido
    newOrder.id = uniqueId;

    // Agregar el nuevo pedido al arreglo de pedidos
    currentData.push(newOrder);

    // Escribir los datos actualizados en el archivo
    fs.writeFileSync(
      dataFilePath,
      `module.exports = ${JSON.stringify(currentData)}`,
      "utf-8"
    );

    res
      .status(200)
      .json({ success: true, message: "Order added successfully.", id: uniqueId });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding order." });
  }
});

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

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const usersData = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
  const users = usersData.users;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Logged in successfully' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
