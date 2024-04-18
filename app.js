const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

//global middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Import routes
const userRoutes = require("./src/routes/userRoutes");
const listRoutes = require("./src/routes/listRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/list", listRoutes);

//add / route
app.get("/", (req, res) => {
  res.send("Welcome to Movie List Server");
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = { app, server };
