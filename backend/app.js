const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const errorMiddleware = require("./Middleware/error");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

// Route Imports
const lawyerRoute = require("./routes/LawyerRoute");
const userRoute = require("./routes/UserRoute");

app.use("/api/v1", lawyerRoute);
app.use("/api/v1", userRoute);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
