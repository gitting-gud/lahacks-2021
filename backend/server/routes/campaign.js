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

        let completedCard = false;
        newStamp.save(async function (err, stamp) {
            console.log(stamp)
            const newStampId = stamp._id;
            console.log(newStampId)
            await UserCard.updateOne({ user: newStamp.user, campaign: newStamp.campaign },
                {
                    $addToSet: { entries: newStampId }
                })
            UserCard.findOne({ user: newStamp.user, campaign: newStamp.campaign }, function (err, result) {
                const stamps = result.entries.length;
                StampCard.findOne({ _id: newStamp.campaign }, function (err, result) {
                    if (err) { throw err; }
                    const completedCard = (stamps == result.num_stamps)
                    res.status(200).json({ numStamps: stamps, isComplete: completedCard })
                })
            })
        });
    }
})

module.exports = router;