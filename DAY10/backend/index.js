import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Movie from "./model/MovieModel.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

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
app.get("/getMovie", async (req, res) => {
    try {
      const movie = await Movie.find({});
      res.status(200).json(movie);
      console.log(movie);
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occured while fetching movies");
    }
  });
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
