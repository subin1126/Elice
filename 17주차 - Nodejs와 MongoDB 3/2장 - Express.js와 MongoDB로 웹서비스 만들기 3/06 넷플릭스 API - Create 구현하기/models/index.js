const mongoose = require("mongoose");
const ContentSchema = require("./schemas/content");

exports.Content = mongoose.model("Content", ContentSchema);
