var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var moonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // RELATIONSHIPS
  planetId: { type: ObjectId, ref: 'Planet', required: true },
  starId: { type: ObjectId, ref: 'Star', required: true },
  galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
})

var Moon = mongoose.model("Moon", moonSchema);

module.exports = Moon