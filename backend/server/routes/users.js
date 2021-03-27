const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');

router.post('/newUser', async (req, res) => {
    if (!req.query.user) {
        res.status(400).json({ error: 'Invalid input' });
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
        res.status(400).json({ error: 'Invalid input' });
    } else {
        User.findOne({ _id: req.query.user }, function (err, user) {
            if (err) { throw err; }
            else {
                res.status(200).send(user.active_cards)
            }
        })
    }
})

module.exports = router;
