require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// Global middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/jobs", jobRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {   
  console.log(`🚀 Server running on PORT ${PORT}`);
});
