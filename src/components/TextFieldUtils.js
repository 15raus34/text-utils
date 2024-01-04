import React, { useContext, useState } from "react";
import Preview from "./Preview";
import { ThemeContext } from "../context/ThemeProvider";
import { AlertContext } from "../context/AlertProvider";
import CustomButton from "./CustomButton";

export default function TextData() {

  const useThemeContext = useContext(ThemeContext);
  const useAlertContext = useContext(AlertContext);

  const [text, newText] = useState("");

  const {mode} = useThemeContext;
  const {showAlert} = useAlertContext;

  //TO HANDLE WHEN USER WRITE SOMETHING
  const handleOnChange = (event) => {
    newText(event.target.value);
  };
//TO CLEAR TEXT FIELD
const clearField = () => {
  newText("");
  showAlert("Field Cleared", "success");
};

//TO CLEAR TEXT FIELD
const changeToUppercase = () => {
  let updatedText = text.toUpperCase();
  newText(updatedText);
  showAlert("Changed To Upper Case", "success");
};

//TO CLEAR TEXT FIELD
const changeToLowercase = () => {
  let updatedText = text.toLowerCase();
  newText(updatedText);
  showAlert("Changed To Lower Case", "success");
};

//TO REMOVE EXTRA SPACES
const removeExtraSpaces = () => {
  let updatedText = text.split(/[ ]+/);
  newText(updatedText.join(" "));
  showAlert("Extra Unwanted Spaces Removed", "success");
};

//TO COPY TO CLIPBOARD
const copyToClipBoard = () => {
  navigator.clipboard.writeText(text);
  showAlert("Copied To ClipBoard", "info");
};

//TO COPY TO CAPITALIZE FIRST LETTER OF EACH WORDS
const capitalizeTextField = () => {
  removeExtraSpaces();
  let capitalizedTextField = text.split(/[ ]+/).map((element) => { return element[0].toUpperCase() + element.slice(1).toLowerCase() });
  newText(capitalizedTextField.join(" "));
  showAlert("Capitalized", "success");
};
  return (
    <>
      <div className="container my-4">
        <div className="form-floating mb-3">
          <textarea
            className={`form-control text-${mode === "light" ? "dark" : "light"
              }`}
            id="mytextbox"
            rows="8"
            style={{
              backgroundColor: mode === "light" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="container my-3">
          <CustomButton onClickAction={clearField} text={text}>Clear Field</CustomButton>
          <CustomButton onClickAction={changeToUppercase} text={text}>Change To UpperCase</CustomButton>
          <CustomButton onClickAction={changeToLowercase} text={text}>Change to LowerCase</CustomButton>
          <CustomButton onClickAction={removeExtraSpaces} text={text}>Remove Extra Spaces</CustomButton>
          <CustomButton onClickAction={copyToClipBoard} text={text}>Copy To Clipboard</CustomButton>
          <CustomButton onClickAction={capitalizeTextField} text={text}>Capitalize</CustomButton>
        </div>
      </div>
      <Preview mode={mode} text={text} word={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} />
    </>
  );
}
