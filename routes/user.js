const express = require("express");
const router = express.Router();



// @route   POST /user/register
// @desc    Log in to existing account
// @access  Public
router.post('/signup', (req, res) => {
    res.status(200).json({
        msg: "successful signup"
    })
});



// @route   POST /user/login
// @desc    Log in to existing account / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
    res.status(200).json({
        msg: "successful login"
    })
});





module.exports = router;