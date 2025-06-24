const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log(
    `MongoDB connection is successful to database: ${connection.db.databaseName}`
  );
});

connection.on("error", (error) => {
  console.log("MongoDB connection is unsuccessful", error);
});

module.exports = mongoose;
