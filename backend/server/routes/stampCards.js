const express = require('express');
const router = express.Router();
const StampCard = require('../../models/stampCardModel');

router.post('/newStampCard', async(req, res) => {
    const newStampCard = new StampCard({
        published: false,
        num_stamps: req.query.num_stamps,
        participants: [],
        start_date: new Date(req.query.end_date.split('/')),
        end_date: new Date(req.query.end_date.split('/')),
        reward_name: req.query.reward_name,
        reward_details: req.query.reward_details
    })
    await StampCard.create(newStampCard);
    res.status(200).json(newStampCard);
})  

module.exports = router;