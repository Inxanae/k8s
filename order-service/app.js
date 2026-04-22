const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(" updated Order Service Running 📦");
});

app.get("/orders", (req, res) => {
  res.json([{ id: 101, item: "Mobile" }]);
});

app.listen(3001, () => console.log("Order service on 3001"));
