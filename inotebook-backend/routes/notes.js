const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([]);
})

module.exports = router;