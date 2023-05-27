import React from "react";
import spinner from "../assets/spinner.gif.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100%",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Spinner;
