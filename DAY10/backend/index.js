import express from "express";
import mongoose from "mongoose";
import Movie from "./model/MovieModel.js";

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/NextGen")
    .then(() => {
        console.log("mongodb connection sucessful");
    }).catch((error) => {
        console.error(error);
    });

app.post("/addMovie", async (req, res) => {
    try {
        const movie = new Movie(req.body);
        console.log(req.body);
        await movie.save();
        res.send("Movie saved successfully");
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
