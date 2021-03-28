const express = require('express');
const router = express.Router();
const Business = require('../../models/businessModel');

router.post('/newBusiness', async(req, res) => {
    if (!req.query.name || !req.query.address || !req.query.lat || !req.query.long) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const newBusiness = new Business({
            name: req.query.name,
            address: req.query.address,
            lat: req.query.lat,
            long: req.query.long,
            campaigns: [],
            pending: []
        });
        newBusiness.save(function(err, data) {
            if(err) {
                console.log(err)
            } else {
                console.log(data)
            }
        });
    }
})

module.exports = router;