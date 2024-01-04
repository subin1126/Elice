const mongoose = require("mongoose");
const SnackSchema = require("./schemas/snack");

exports.Snack = mongoose.model("Snack", SnackSchema);
