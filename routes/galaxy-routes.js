var express = require('express')
var router = express.Router()
var galaxies = require('../models/galaxy')
var stars = require('../models/star')
var planets = require('../models/planet')
var moons = require('../models/moon')
var species = require('../models/species')

//sessions use JavaScript Web Tokens (JWT) to identify requests header

//Standard routes get/push/put/delete 
router
  .get('/', (req, res, next) => {
    galaxies.find(req.query)
      .then(galaxies => {
        res.send(galaxies)
      })
      .catch(next)
  })
  .post('/', (req, res, next) => {
    galaxies.create(req.body)
      .then(galaxy => {
        res.send(galaxy)
      }).catch(next)
  })
  .put('/:id', (req, res, next) => {
    var id = req.params.id
    galaxies.findByIdAndUpdate(id, req.body)
      .then(galaxy => {
        res.send({ message: 'Successfully Updated' })
      }).catch(next)
  })
  .delete('/:id', (req, res, next) => {
    galaxies.findByIdAndRemove(req.params.id)
      .then(galaxy => {
        res.send({ message: 'Successfully Removed' })
      }).catch(next)
  })




// CUSTOM ROUTES
router
  .get('/:id/stars', (req, res, next) => {
    stars.find({ galaxyId: req.params.id })
      .then(stars => {
        res.send(stars)
      }).catch(next)
  })
  .get('/:id/stars/:starId', (req, res, next) => {
    stars.find({ galaxyId: req.params.id, _id: req.params.starId })
      .then(star => {
        res.send(star)
      }).catch(next)
  })
  .get('/:id/stars/:starId/planets', (req, res, next) => {
    planets.find({ starId: req.params.starId })
      .then(planets => {
        res.send(planets)
      }).catch(next)
  })
  .get('/:id/stars/:starId/planets/:planetId', (req, res, next) => {
    planets.find({ galaxyId: req.params.id, starId: req.params.starId, _id: req.params.planetId })
      .then(planet => {
        res.send(planet)
      }).catch(next)
  })
  .get('/:id/stars/:starId/planets/:planetId/moons', (req, res, next) => {
    moons.find({ galaxyId: req.params.id, starId: req.params.starId, planetId: req.params.starId })
      .then(moons => {
        res.send(moons)
      }).catch(next)
  })
  .get('/:id/stars/:starId/planets/:planetId/moons/:moonId', (req, res, next) => {
    moons.find({ galaxyId: req.params.id, starId: req.params.starId, planetId: req.params.starId, _id: req.params.moonId })
      .then(moon => {
        res.send(moon)
      }).catch(next)
  })
  .get('/:id/planets', (req, res, next) => {
    planets.find({ galaxyId: req.params.id })
      .then(planets => {
        res.send(planets)
      }).catch(next)
  })
  .get('/:id/planets/:planetId', (req, res, next) => {
    stars.find({ galaxyId: req.params.id, _id: req.params.planetId })
      .then(planet => {
        res.send(planet)
      }).catch(next)
  })
  .get('/:id/species', (req, res, next) => {
    species.find({ galaxyId: req.params.id })
      .then(species => {
        res.send(species)
      }).catch(next)
  })
  .get('/:id/species/:speciesId', (req, res, next) => {
    species.find({ galaxyId: req.params.id, _id: req.params.speciesId })
      .then(species => {
        res.send(species)
      }).catch(next)
  })






// ERROR HANDLER
router.use('/', (err, req, res, next) => {
  if (err) {
    res.send(418, {
      success: false,
      error: err.message
    })
  } else {
    res.send(400, {
      success: false,
      error: 'Something failed please try again later'
    })
  }
})

module.exports = router

// /api/galaxies/91334289043/stars/9328023884/planets/93280432809483/species
