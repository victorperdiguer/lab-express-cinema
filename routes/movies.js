const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.js');

// GET movies
router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        // console.log({movies});
        res.render('movies', { movies });
    } catch (error) {
        next(error);
    }
});

//GET a particular movieId to show its card
router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await Movie.findById(movieId);
        // console.log(movie);
        res.render('movie-detail', movie);
    } catch (error) {
        next(error);
    }
})

module.exports = router;