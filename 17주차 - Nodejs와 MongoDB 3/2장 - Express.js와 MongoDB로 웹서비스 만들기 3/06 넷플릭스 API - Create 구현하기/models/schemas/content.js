const { Schema } = require("mongoose");

const ContentSchema = new Schema({
  show_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
});

module.exports = ContentSchema;
