require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");
 

console.log("🔥 INDEX.JS FILE STARTED");

const app = express();
app.use(cors());
app.use(express.json());

const jobRoutes = require("./routes/jobs");
app.use("/jobs", jobRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
