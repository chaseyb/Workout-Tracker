// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Logger 
app.use(logger("dev"));

// Routes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

// Mongoose Connection to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Server 
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
