const express = require("express");
const router = express.Router();



// @route   POST /user/register
// @desc    Log in to existing account
// @access  Public
router.post('/register', (req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        msg: "successful signup",
        userinfo : req.body
    })
});



// @route   POST /user/login
// @desc    Log in to existing account / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {

    const { email, password } = req.body;

    res.status(200).json({
        msg: "successful login",
        userinfo : req.body
    })
});





module.exports = router;