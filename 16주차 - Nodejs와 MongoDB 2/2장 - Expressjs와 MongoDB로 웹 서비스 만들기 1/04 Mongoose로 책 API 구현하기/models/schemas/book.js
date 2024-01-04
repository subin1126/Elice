const { Schema } = require("mongoose");

const BookSchema = new Schema({
  id: {
    type: Number,
    requried: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});


module.exports = BookSchema;
