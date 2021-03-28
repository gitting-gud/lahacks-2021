const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const Business = require('../../models/businessModel');
const StampCard = require('../../models/stampCardModel');

router.post('/newUser', async (req, res) => {
  if (!req.query.user) {
    res.status(400).json({ error: 'Invalid Input' });
  } else {
    const newUser = new User({
      email: req.query.email,
      active_cards: []
    })
    await User.create(newUser);
    res.status(200).json(newUser);
  }
});

router.get('/getUserCards', async (req, res) => {
  if (!req.query.user) {
    res.status(400).json({ error: 'Invalid Input' });
  } else {
    User.findOne({ _id: req.query.user }, function (err, user) {
      if (err) { throw err; }
      else {
        res.status(200).send(user.active_cards)
      }
    })
  }
})


// Stretch-Goal
router.get('/getNearbyBusinesses', async (req, res) => {
  if (!req.query.lat || !req.query.long || !req.query.radius){
    res.status(400).json({error: 'Invalid Input'});
  }
  else {
    const lat = req.query.lat, long = req.query.long, rad = req.query.radius;
    
    Business.find({
      lat: {$exists: true},
      long: {$exists: true},
    }, function (err, results) {
      if(err) {throw err;}
      else {
        let inds = [];
        let distMap = {};
        
        for(const i=0; i<results.length; ++i) {
          const business = results[i];
          const d = dist(lat, long, business.lat, business.long);
          if(d <= rad) {
            distMap[i] = d;
            inds.push(i);
          }
        }
        if(inds.length > 10) {
          inds = inds.slice(0, 10);
        }
        
        inds.sort((a,b) => distMap[a] == distMap[b] ? 0 : distMap[a] < distMap[b] ? -1 : 1);
        
        const toReturn = inds.map(i => results[i]);
        
        res.status(200).send(toReturn);
      }
    })
  }
})

module.exports = router;

// haversine formula. returns distance between two coordinates, in miles
// see https://www.movable-type.co.uk/scripts/latlong.html
const dist = (lat1, long1, lat2, long2) => {
  const R = 3958.761; // average radius of earth, in mi
  const phi1 = lat1 * Math.PI/180;
  const phi2 = lat2 * Math.PI/180;
  const dphi = (lat2-lat1) * Math.PI/180;
  const dlambda = (long2-long1) * Math.PI/180;
  
  const a = Math.sin(dphi/2) * Math.sin(dphi/2)
  + Math.cos(phi1) * Math.cos(phi2) * Math.sin(dlambda/2) * Math.sin(dlambda/2);
  
  const c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}