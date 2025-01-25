import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: String,
    hero: String,
    heroine: String,
    rating: Number,
    release: String,
    genre: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;