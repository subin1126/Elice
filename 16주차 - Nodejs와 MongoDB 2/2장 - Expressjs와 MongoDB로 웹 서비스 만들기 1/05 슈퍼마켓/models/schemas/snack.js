const { Schema } = require("mongoose");

const SnackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
  },
});

module.exports = SnackSchema;
