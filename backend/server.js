require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("API running");
});

const sequelize = require("./config/db");

sequelize.sync({ force: true }).then(() => {
  console.log("DB connected");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});