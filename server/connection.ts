const mongoose = require("mongoose");

export function connection(): void {
  mongoose
    .connect("mongodb://localhost:27017/dogs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      return console.info(`Successfully connected`);
    })
    .catch((error: any) => {
      console.error("Error connecting to database: ", error);
      return process.exit(1);
    });
}
