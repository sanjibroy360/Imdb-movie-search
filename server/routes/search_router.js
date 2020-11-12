let express = require("express");
let router = express.Router();
let fs = require("fs");
let cheerio = require("cheerio");
let axios = require("axios");

router.get("/", async (req, res) => {
  try {
    fs.readFile("output.json", "utf-8", (error, data) => {
      if (error) {
        let response = {
          movieList: [],
          errorMessage:
            errorMessage.message ||
            "Something went wrong and the data could not be filtered.",
        };
        return res.status(500).json({ response });
      } else {
        data = JSON.parse(data);
        let { rating, name, genre } = req.query;

        let allGenre = [];
        filteredMovieList = data.movieList.filter((movie) => {
          allGenre.push(...movie.movieGenre);
          if (
            ((rating && Math.floor(movie.movieRatings) == rating.trim()) ||
              !rating) &&
            ((name &&
              movie.movieName
                .toLowerCase()
                .indexOf(name.trim().toLowerCase()) !== -1) ||
              !name) && // Use indexOf instead of includes to handle characters like "" or '' or `` in the movie name.
            ((genre && movie.movieGenre.includes(genre.trim().toLowerCase())) ||
              !genre)
          ) {
            return movie;
          }
        });

        return res.status(200).json({
          movieList: filteredMovieList,
          errorMessage: "",
          allGenre: [...new Set(allGenre)],
        });
      }
    });
  } catch (error) {
    let response = {
      movieList: [],
      errorMessage:
        error.message ||
        "Something went wrong and the data could not be filtered.",
      allGenre: [],
    };
    return res.status(500).json({ response });
  }
});

module.exports = router;
