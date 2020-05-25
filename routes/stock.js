const express = require("express");
const router = express.Router();

// @route   GET /stocks/symbols
// @desc    Returns the latest entry for a particular stock searched by symbol (1-5 upper case letters). 
// @access  Public
router.get('/symbols', (req, res) => {
    res.status(200).json({
        msg: "successful stock data"
    })
});



// @route   GET /stocks/:symbol
// @desc    Returns the latest entry for a particular stock searched by symbol (1-5 upper case letters).
// @access  Public
router.get('/:symbols', (req, res) => {
    res.status(200).json({
        msg: "successful stock symbol data"
    })
});

// @route   GET /stocks/authed/:symbol
// @desc    Return entries of stock searched by symbol, optionally filtered by date.
// @access  Private
router.get('/authed/:symbol', (req, res) => {
    res.status(200).json({
        msg: "successful stock history of symbol data"
    })
});




module.exports = router;
