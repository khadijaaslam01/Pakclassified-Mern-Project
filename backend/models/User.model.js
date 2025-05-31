const { Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: SchemaTypes.String,
    required: true,
    minlength: 5,
    maxlength: 40,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  email: {
    type: SchemaTypes.String,
    required: true,
  },
  phone: {
    type: SchemaTypes.Number,
    required: true,
  },
});

const User = model("User", userSchema);
module.exports = User;
