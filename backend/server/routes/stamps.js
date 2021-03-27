const express = require('express');
const router = express.Router();
const Stamp = require('../../models/stampModel');
const UserCard = require('../../models/userCardModel');

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
        newStamp.save(async function (err, stamp) {
            const newStampId = stamp._id;
            await UserCard.updateOne({ _id: newStamp.user },
                {   
                    $addToSet: {entries: newStampId }
                })
        });
        res.status(200).json({ newStamp });
    }
})

module.exports = router;