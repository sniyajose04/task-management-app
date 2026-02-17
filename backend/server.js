const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const taskRoutes = require("./routes/taskRoutes")
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/tasks",taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.get("/", (req,res)=> res.send("API running"));

app.listen(5000, ()=> console.log("Server running on 5000"));
