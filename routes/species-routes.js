var express = require('express')
var router = express.Router()
var species = require('../models/species')

router
  .get('/', (req, res, next) => {
    species.find(req.query)
      .then(species => {
        res.send(species)
      })
      .catch(next)
  })
  .post('/', (req, res, next) => {
    species.create(req.body)
      .then(species =>{
        res.send(specie)
      }).catch(next)
  })
  .put('/:id', (req, res, next)=>{
    var id = req.params.id
    species.findByIdAndUpdate(id, req.body)
      .then(species =>{
        res.send({message: 'Successfully Updated'})
      }).catch(next)
  })
  .delete('/:id', (req, res, next)=>{
    species.findByIdAndRemove(req.params.id)
      .then(species => {
        res.send({message: 'Successfully Removed'})
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
