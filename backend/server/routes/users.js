const express = require('express');
const router = express.Router();
const Stamp = require('../../models/stampModel');
const User = require('../../models/userModel');

router.post('/newStamp', async (req, res) => {
    if (!req.query.user || !req.query.campaign || !req.query.business) {
        res.status(400).json({ error: 'Invalid input' });
    }
    else {
        const newStamp = new Stamp({
            user: req.query.user,
            campaign: req.query.campaign,
            business: req.query.business
        })
        newStamp.save(function (err, stamp) {
            const newStampId = stamp._id;
            User.updateOne({ _id: newStamp.user },
                {
                    $addToSet: { active_cards: newStampId }
                }, function (err, stamp) {
                    if(err) {
                        throw err;
                    }
                })
            console.log("completed")
        });
        res.status(200).json({ newStamp });
    }
})

router.post('/newUser', async (req, res) => {
    const newUser = new User({
        email: req.query.email,
        active_cards: []
    })
    await User.create(newUser);
    res.status(200).json(newUser);
})

module.exports = router;