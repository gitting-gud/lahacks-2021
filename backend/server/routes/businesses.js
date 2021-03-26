const express = require('express');
const router = express.Router();
const Business = require('../../models/businessModel');

router.post('/newBusiness', async(req, res) => {
    if (!req.query.name || !req.query.address) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newBusiness = new Business({
            name: req.query.name,
            address: req.query.address,
            campaigns: [],
            pending: []
        })
        newBusiness.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
    }
})

module.exports = router;