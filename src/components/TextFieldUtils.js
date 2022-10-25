import React, { useState } from "react";
import Preview from "./Preview";

export default function TextData(props) {
  const [text, newText] = useState("");
  const [words,currentWord] = useState(0);

  //TO HANDLE WHEN USER WRITE SOMETHING
  const handleOnChange = (event) => {
    newText(event.target.value);
    const newWordLength = text.split(" ").length;
    currentWord(newWordLength);
  };

  //TO CLEAR TEXT FIELD
  const clearField = () => {
    newText("");
    props.showAlert("Field Cleared","success");
  };

  //TO CLEAR TEXT FIELD
  const changeToUppercase = () => {
    let updatedText = text.toUpperCase();
    newText(updatedText);
    props.showAlert("Changed To Upper Case","success");
  };

  //TO CLEAR TEXT FIELD
  const changeToLowercase = () => {
    let updatedText = text.toLowerCase();
    newText(updatedText);
    props.showAlert("Changed To Lower Case","success");
  };

  //TO REMOVE EXTRA SPACES
  const removeExtraSpaces = () => {
    let updatedText = text.split(/[ ]+/);
    newText(updatedText.join(" "));
    props.showAlert("Extra Unwanted Spaces Removed","success");
  };

  //TO COPY TO CLIPBOARD
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To ClipBoard","info");
  };
  return (
    <>
      <div className="container my-4">
        <div className="form-floating mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="mytextbox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="container my-3">
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={clearField}
          >
            Clear Field
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={changeToUppercase}
          >
            Change To UpperCase
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={changeToLowercase}
          >
            Change to LowerCase
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={copyToClipBoard}
          >
            Copy To Clipboard
          </button>
        </div>
      </div>
      <Preview mode={props.mode} text={text} word={words}/>
    </>
  );
}
