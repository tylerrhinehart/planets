var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var galaxyRoutes = require('./routes/galaxy-routes')
var starRoutes = require('./routes/star-routes')
var planetRoutes = require('./routes/planet-routes')
var moonRoutes = require('./routes/moon-routes')
var speciesRoutes = require('./routes/species-routes')
var server = express();
var port = 3000;


//MIDDLEWARE
server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoutes)
server.use('/api/planets', planetRoutes)
server.use('/api/moons', moonRoutes)
server.use('/api/species', speciesRoutes)

server.listen(port, ()=>{
  console.log("starting up Node, on port 3000")
})

var dbConnect = require("./config/db/mlab-config");
