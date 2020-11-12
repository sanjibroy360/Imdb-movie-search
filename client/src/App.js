import React, { useState } from "react";
import Hero from "./components/Hero";
import MovieCards from "./components/MovieCards";
import NavBar from "./components/NavBar";

function App() {
  let [movieName, setMovieName] = useState("");
  return (
    <>
      <NavBar setMovieName={setMovieName} />
      <div className="container">
        <Hero />
        <MovieCards setMovieName={setMovieName} movieName={movieName} />
      </div>
    </>
  );
}

export default App;
