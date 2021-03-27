const express = require('express');
const router = express.Router();
const UserCard = require('../../models/userCardModel');
const User = require('../../models/userModel');

router.post('/newUserCard', async(req, res) => {
    if (!req.query.user || !req.query.campaign) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newUserCard = new UserCard({
            user: req.query.user,
            campaign: req.query.campaign,
            entries: req.query.entries.split(', ')
        })
        newUserCard.save(async function (err, userCard) {
            const newUserCardId = userCard._id;
            await User.updateOne({ _id: req.query.user },
                {
                    $addToSet: { active_cards: newUserCardId }
                })
        });
        res.status(200).json({ newUserCard });
    }
})

module.exports = router;