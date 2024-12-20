// @ts-check

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://radheexch:sIHT5cZwvOYnCA7y@radheexch.nzcjo.mongodb.net/?retryWrites=true&w=majority&appName=radheexch";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const UserModel = mongoose.model(
  "wolf_users",
  new mongoose.Schema({
    username: String,
    password: String,
  })
);

module.exports = { UserModel };
