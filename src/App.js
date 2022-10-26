import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextFieldUtils from "./components/TextFieldUtils";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, toggleMode] = useState("light");
  const [alert, newAlert] = useState(null);

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };
  const modeToggle = (scrColor) => {
    removeBodyClasses();
    if (scrColor !== null) {
      document.body.classList.add("bg-" + scrColor);
    } else {
      if (mode === "light") {
        toggleMode("dark");
        document.body.style.backgroundColor = "#1f1f1f";
      } else {
        toggleMode("light");
        document.body.style.backgroundColor = "white";
      }
    }
  };

  const showAlert = (mesg, type) => {
    newAlert({
      message: mesg,
      type: type,
    });

    setTimeout(() => {
      newAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <Navbar mode={mode} modeToggle={modeToggle} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={<TextFieldUtils mode={mode} showAlert={showAlert} />}
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
