const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoutes");
const doctorRoute = require("./routes/doctorsRoute");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Node server started at port ${port}`));
