import React from "react";
import SearchBox from "./SearchBox";
import Logo from "./Logo";

function NavBar({setMovieName}) {
  return (
    <header className="header_sec">
      <nav className="container">
        <div className="logo_wrapper">
          <a href="/movies">
            <p className="logo">
              <Logo />
            </p>
          </a>
        </div>
        <SearchBox setMovieName={setMovieName}/>
      </nav>
    </header>
  );
}

export default NavBar;
