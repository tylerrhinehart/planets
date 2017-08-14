var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var speciesSchema = new mongoose.Schema({
    name: { type: String, required: true },

    // RELATIONSHIPS
    moonId: { type: ObjectId, ref: 'Moon', required: true},
    planetId: { type: ObjectId, ref: 'Planet', required: true },
    starId: { type: ObjectId, ref: 'Star', required: true },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
})


var Species = mongoose.model("Species", speciesSchema);

module.exports = Species