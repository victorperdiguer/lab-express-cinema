const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        default: "https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"
    },
    description:  {
        type: String,
    },
    showtimes:  {
        type: [String],
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;