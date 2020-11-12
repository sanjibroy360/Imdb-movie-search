import React from "react";
import { useState } from "react";

function SearchBox({ setMovieName }) {
  let [movieNameInput, setMovieNameInput] = useState("");
  return (
    <div className="search_box">
      <input
        type="text"
        placeholder="Movie name"
        value={movieNameInput}
        onChange={(e) => setMovieNameInput(e.target.value)}
      />
      <button
        className="search_btn"
        onClick={(e) => {
          setMovieName(movieNameInput);
          return setMovieNameInput("");
        }}
      >
        <i className="fas fa-search" />
      </button>
    </div>
  );
}

export default SearchBox;
