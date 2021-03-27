const express = require('express');
const router = express.Router();
const Stamp = require('../../models/stampModel');
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

module.exports = router;
