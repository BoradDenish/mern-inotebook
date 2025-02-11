const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        'name': "Denish",
        'number': 23
    }
    res.json(obj);
})

module.exports = router;