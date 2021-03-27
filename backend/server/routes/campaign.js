const express = require('express');
const router = express.Router();
const Stamp = require('../../models/stampModel');
const UserCard = require('../../models/userCardModel');
const StampCard = require('../../models/stampCardModel');

router.post('/giveStamp', async (req, res) => {
    if (!req.query.user || !req.query.campaign || !req.query.business) {
        res.status(400).json({ error: 'Invalid Input' });
    }
    else {
        const newStamp = new Stamp({
            user: req.query.user,
            campaign: req.query.campaign,
            business: req.query.business
        })
        newStamp.save(async function (err, stamp) {
            const newStampId = stamp._id;
            await UserCard.updateOne({ user: newStamp.user, campaign: newStamp.campaign},
                {
                    $addToSet: { entries: newStampId }
                })
        });
        UserCard.find({ user: newStamp.user, campaign: newStamp.campaign}, function(err, result) {
            if(err) {throw err;}
            const numberStamps = result.entries.length;
            StampCard.find({_id: newStamp.campaign}, function(err, result) {
                if(err) {throw err;}
                const complete = (numberStamps == result.num_stamps);
                res.status(200).json({ numStamps: numberStamps, isComplete: complete});
            })
        })
    }
})

module.exports = router;