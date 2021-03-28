const express = require('express');
const router = express.Router();
const StampCard = require('../../models/stampCardModel');
const Business = require('../../models/businessModel');

router.post('/newStampCard', async (req, res) => {
    const newStampCard = new StampCard({
        published: false,
        num_stamps: req.query.num_stamps,
        participants: req.query.participants.split(', '),
        start_date: req.query.start_date,
        end_date: req.query.end_date,
        reward_name: req.query.reward_name,
        reward_details: req.query.reward_details
    })
    newStampCard.save(function (err, stampCard) {
        const newStampCardId = stampCard._id;
        newStampCard.participants.forEach(business => {
            Business.updateOne({ _id: business }, {
                $addToSet: { campaigns: newStampCardId }
            }, function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
            })
        })
    });
    res.status(200).json({ newStampCard });
})

router.get('/getParticipantBusinesses', async (req, res) => {
    if (!req.query.stampCardId) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        StampCard.findOne({ _id: req.query.stampCardId }, function (err, result) {
            if (err) { throw err; }
            res.status(200).send(result.participants);
        })
    }
})

router.get('/getStampCard', async (req, res) => {
    if (!req.query.stampCardId) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        StampCard.findOne({ _id: req.query.stampCardId }, function (err, result) {
            if (err) { res.status(400) }
            res.status(200).send(result);
        })
    }
})
module.exports = router;