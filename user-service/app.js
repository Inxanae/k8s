const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("updated User Service Running 🚀");
});

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "VVigneshvellaidurai" }]);
});

app.listen(3000, () => console.log("Server running on port 3000"));
