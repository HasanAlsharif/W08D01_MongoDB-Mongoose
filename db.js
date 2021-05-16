const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  
  // connecting mongoose
  mongoose.connect("mongodb://localhost:27017/DB_W08D04", options).then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log(err);
    }
  );