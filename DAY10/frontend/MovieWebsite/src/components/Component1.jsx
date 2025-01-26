import React, { useState } from "react";
import axios from "axios";

function Component1() {
  const [movieName, setMovieName] = useState("");
  const [heroName, setHeroName] = useState("");
  const [heroineName, setHeroineName] = useState("");
  const [rating, setRating] = useState("");
  const [release, setRelease] = useState("");
  const [genre, setGenre] = useState("");

  const postMovie = async () => {
    try {
      const movieData = await axios.post("http://localhost:3000/addMovie", {
        name: movieName,
        hero: heroName,
        heroine: heroineName,
        rating: rating,
        release: release,
        genre: genre,
      });
      alert("Data saved successfully");
      console.log(movieData.data);
    } catch (error) {
      console.log("Post data failed");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Enter Movie Data</h1>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setMovieName(e.target.value)}
          />
          <br />
          <label htmlFor="hero">Hero: </label>
          <input
            type="text"
            id="hero"
            onChange={(e) => setHeroName(e.target.value)}
          />
          <br />
          <label htmlFor="heroine">Heroine: </label>
          <input
            type="text"
            id="heroine"
            onChange={(e) => setHeroineName(e.target.value)}
          />
          <br />
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            id="rating"
            onChange={(e) => setRating(e.target.value)}
          />
          <br />
          <label htmlFor="year">Release Year: </label>
          <input
            type="text"
            id="year"
            onChange={(e) => setRelease(e.target.value)}
          />
          <br />
          <label htmlFor="genre">Genre: </label>
          <input
            type="text"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <button onClick={postMovie}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Component1;
