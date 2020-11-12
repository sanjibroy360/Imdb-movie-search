import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

function SearchParameter() {
  let location = useLocation();

  let [listHeading, setListHeading] = useState("");
  useEffect(() => {
    if (location.search) {
      let searchParameter = queryString.parse(location.search);
      let str = `All  movies which has `;
      let { rating, name, genre } = searchParameter;

      if (rating) {  
          str += `within ${rating} star rating, `;
        
      }

      if (name) {
        str += `"${name}" name, `;
      }

      if (genre) {
        str += `${genre} genre, `;
      }

      str = str.slice(0, -2);
      setListHeading(str);
    }
  }, [location.search]);
  if (listHeading) {
    return <p className="search_param">{listHeading}</p>;
  } else {
    return (
      <p className="search_param">
        IMDb "Top 1000" (Sorted by IMDb Rating Descending)
      </p>
    );
  }
}

export default SearchParameter;
