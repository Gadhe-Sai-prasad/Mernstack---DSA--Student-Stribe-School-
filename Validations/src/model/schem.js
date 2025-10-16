const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: "this is not valid",
    },
  },
  age: {
    type: Number,
    required: true,
    min: [18, "min age should be 18"],
  },
  hobbies: {
    type: String,
    required: true,
  },

});
module.exports = userSchema;
