import React from "react";

function SingleMovieCard({ movieInfo }) {
  return (
    <div className="card" key={movieInfo.id}>
      <div className="movie_img">
        <img src={movieInfo.movieImage} alt="" />
      </div>
      <div className="card_content">
        <p className="card_title">
          {movieInfo.movieName}{" "}
          <span className="release_year">{movieInfo.movieReleaseYear}</span>
        </p>
        <p>
          <span className="duration">{movieInfo.movieDuration}</span>
          <span>{movieInfo.movieGenre?.join(", ")}</span>
        </p>

        <div className="card_meta">
          <p>
            <i className="fas fa-star rating" /> {movieInfo.movieRatings}
          </p>

          <p>
            <span className="meta_score">{movieInfo.movieMetaScore}</span>{" "}
            Metascore
          </p>
        </div>
        <p>{movieInfo.movieSummary}</p>

        <p>
          Director: <a href="#">{movieInfo.movieDirector}</a>
        </p>

        <div className="card_meta vote_sec">
          <span className="vote">Votes: {movieInfo.movieVotes}</span>
          <span>Gross: {movieInfo.movieGross}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieCard;
