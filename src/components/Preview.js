import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function Preview({word,text}) {
  const useThemeContext = useContext(ThemeContext);
  const {mode} = useThemeContext;
  return (
    <div
      className="container my-4"
      style={{ color: mode === "light" ? "black" : "white" }}
    >
      <h1>Summary:</h1>
      <b>
        <p>
          {word} {word<=1?"WORD":"WORDS"} AND {text.length} {text.length<=1?"CHARACTER":"CHARACTERS"}
        </p>
      </b>
      {text === "" ? null : <div className="my-5">
        <h3>PREVIEW:</h3>
        <p>{text}</p>
      </div>}
    </div>
  );
}
