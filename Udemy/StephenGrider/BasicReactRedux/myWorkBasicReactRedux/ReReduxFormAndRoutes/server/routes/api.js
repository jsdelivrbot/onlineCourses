const express = require('express');
const router = express.Router();

const Ninja = require('../../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function (req, res) {
  Ninja.find({})
    .then(function (ninjas) {
      res.send(ninjas);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log('there ?')
  // Ninja.geoNear(
  //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
  //     {maxDistance: 5000000, spherical: true}
  // ).then(function(ninjas){
  //     res.send(ninjas);
  // }).catch(next);
});

router.get('/ninjas/:id', function (req, res) {
  Ninja.findOne({ _id: req.params.id })
    .then((ninja) => {
      res.send(ninja);
    });
});

// create new ninja
router.post('/ninjas', (req, res) => {
  console.log('POST');
  console.log(req.body);
  Ninja.create(req.body)
    .then((ninja) => {
      console.log('create?');
      res.send(ninja);
    })
    .catch((err) => {
      res.status(422);
      res.send({ error: err.message });
    });
});

// get all ninja
router.put('/ninjas/:id', (req, res) => {
  console.log('PUT');
  console.log(req.body);
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Ninja.findOne({ _id: req.params.id })
        .then((ninja) => {
          res.send(ninja);
        });
    })
    .catch((err) => {
      res.send(err);
    });

  // res.send({type: 'PUT'});
});

// delete ninja
router.delete('/ninjas/:id', (req, res) => {
  console.log('DELETE');
  // console.log(req.params.id);
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then((ninja) => {
      console.log('success');
      res.send((ninja));
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
  // res.send({type: req.params.id});
});

module.exports = router;
