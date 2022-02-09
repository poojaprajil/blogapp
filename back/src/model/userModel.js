const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://poojaprajil:dhruv@cluster0.go4ep.mongodb.net/Blogdb?retryWrites=true&w=majority');
//schema

let mongooseSchema = mongoose.Schema;

const userSchema = new mongooseSchema({
  username: String,
  email: String,
  password: String,
});

//model
var userModelObj = mongoose.model("users", userSchema);
module.exports = { userModelObj };
