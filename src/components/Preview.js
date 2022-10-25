import React from "react";

export default function Preview(props) {
  return (
    <div
      className="container my-4"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1>Summary:</h1>
      <b>
        <p>
          {props.word} WORDS AND {props.text.length} CHARACTERS
        </p>
      </b>
      <div className="my-5">
        <h3>PREVIEW:</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
