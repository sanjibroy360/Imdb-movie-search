let express = require("express");
let router = express.Router();
let fs = require("fs");
let cheerio = require("cheerio");
let axios = require("axios");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  try {
    let data = {
      movieList: [],
      errorMessage: "",
    };

    const url =
      "https://www.imdb.com/search/title/?count=10&groups=top_1000&sort=user_rating";

    let response = await axios.get(url);
    let allGenre = [];
    if (response) {
      let $ = cheerio.load(response.data);

      $(".lister-item").map((index, movie) => {
        $(".lister-item").map(function () {
          let movieName = $(this)
            .find(".lister-item h3.lister-item-header a")
            .text()
            .trim();
          let movieImage = $(this)
            .find(".lister-item-image a .loadlate")
            .attr("loadlate");

          let movieDuration = $(this)
            .find(".lister-item-content .runtime")
            .text()
            .trim();
          let movieRatings = $(this)
            .find(".ratings-bar .ratings-imdb-rating strong")
            .text()
            .trim();

          let movieSummary = $(this)
            .find("p[class='text-muted']")
            .text()
            .trim();

          let movieDirector = $(this)
            .find(".lister-item-content p[class=''] a")
            .first()
            .text()
            .trim();

          let movieReleaseYear = $(this)
            .find(".lister-item-header > .lister-item-year.text-muted.unbold")
            .text()
            .trim();

          let movieVotes = $(this)
            .find(".sort-num_votes-visible span:nth-child(2)")
            .text()
            .trim();
          let movieGross = $(this)
            .find(".sort-num_votes-visible span:last-child")
            .last()
            .text()
            .trim();

          let movieMetaScore = $(this)
            .find(".ratings-metascore .metascore")
            .text()
            .trim();

          let movieGenre = $(this)
            .find(".text-muted .genre")
            .text()
            .trim()
            .split(",")
            .map((genre) => genre.trim().toLowerCase());

          allGenre.push(...movieGenre);

          let singleMovieInfo = {
            id: uuidv4(),
            movieImage,
            movieName,
            movieRatings,
            movieDuration,
            movieSummary,
            movieDirector,
            movieVotes,
            movieGross,
            movieMetaScore,
            movieGenre,
            movieReleaseYear,
          };

          data = {
            movieList: [...data.movieList, { ...singleMovieInfo }],
            errorMessage: "",
          };
        });
      });

      fs.writeFile(
        "output.json",
        JSON.stringify({ ...data, allGenre: [...new Set(allGenre)] }),
        (error) => {
          if (error) {
            data = {
              movieList: [],
              errorMessage:
                error.message ||
                "Something went wrong and the data could not be saved.",
            };
            return res.status(500).json({ ...data });
          }
        }
      );
      return res
        .status(200)
        .json({ ...data, allGenre: [...new Set(allGenre)] });
    }
  } catch (error) {
    data = { movieList: [], errorMessage: error.message, allGenre: [] };

    return res.status(404).json({ data });
  }
});

module.exports = router;
