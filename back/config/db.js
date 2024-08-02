const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sarah:ipssi2024@cluster0.bi7yhrq.mongodb.net/Vetolib",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
