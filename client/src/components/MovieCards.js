import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "../axios";
import SearchParameter from "./SearchParameter";
import SingleMovieCard from "./SingleMovieCard";
import queryString from "query-string";
import ShowLoader from "./ShowLoader";

function MovieCards({ setMovieName, movieName }) {
  let [data, setData] = useState({});
  let [rating, setRating] = useState(0);
  let [genre, setGenre] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  let location = useLocation();
  let history = useHistory();

  let ratingOptions = [
    "10 star",
    "within 9 star",
    "within 8 star",
    "within 7 star",
    "within 6 star",
    "within 5 star",
    "within 4 star",
    "within 3 star",
    "within 2 star",
    "1 and below",
  ];

  useEffect(() => {
    if (location.search) {
      let query = queryString.parse(location.search);
      if (query.rating) {
        setRating(query.rating);
      }

      if (query.genre) {
        setGenre(query.genre);
      }

      axios.get(`/movies/search${location.search}`).then(({ data }) => {
        setIsLoading(false);
        return setData(data);
      });
    } else {
      axios
        .get("/movies")
        .then(({ data }) => {
          setData(data);
          return setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [location.search]);

  useEffect(() => {
    let qs = {};
    if (genre) {
      qs.genre = genre;
    }

    if (rating) {
      qs.rating = rating;
    }

    if (movieName) {
      qs.name = movieName;
    }

    let str = queryString.stringify(qs);
    if (str.trim()) {
      history.push(`/movies/search?${str}`);
    }
  }, [genre, rating, movieName]);

  // if (isLoading) {
  //   return <ShowLoader />;
  // }

  return (
    <div>
      <div className="card_list_header">
        <SearchParameter />
        <div className="param_input">
          <div>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="">Rating</option>
              {ratingOptions?.map((val, index) => {
                return (
                  <option value={10 - index} key={val}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Genre</option>
              {data?.allGenre?.map((val, index) => {
                return (
                  <option value={val} key={val}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      {isLoading ? (
        <ShowLoader />
      ) : (
        <ul className="card_list">
          {data?.movieList?.map((movie) => {
            return (
              <li key={movie.id}>
                <SingleMovieCard movieInfo={movie} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MovieCards;
