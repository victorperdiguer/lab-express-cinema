const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

// GET movies
router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        // console.log({movies});
        res.render('movies', { movies });
    } catch (error) {
        next(error);
    }
});

module.exports = router;