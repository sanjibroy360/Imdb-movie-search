import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function ShowLoader() {
  return (
    <div className="loader">
      <Loader active size="large" inline="centered">
        Loading
      </Loader>
    </div>
  );
}

export default ShowLoader;
