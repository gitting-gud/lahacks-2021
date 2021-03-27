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
router.get('/getNearbyCampaigns', async (req, res) => {
   if (!req.query.location || !req.query.radius){
       res.status(400).json({error: 'Invalid Input'});
   }
   else {
       const lat = req.query.location[0];
       const long = req.query.location[1];
       const rad = req.query.radius;

        Business.find({
            lat: {$ge: lat - rad},
            lat: {$le: lat + rad},
            long: {$ge: long - rad},
            long: {$le: long + rad},
        }, function (err, results) {
            if(err) {throw err;}
            else {
                let toReturn = [];
                for (let i = 0; i < results.length; i++) {
                    let currBusiness = results[i].campaigns
                    currBusiness.forEach(camp => {toReturn.push(camp)})
                }
                res.status(200).send(toReturn)
            }
        })
   }
})

module.exports = router;
