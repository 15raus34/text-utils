import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextFieldUtils from "./components/TextFieldUtils";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, toggleMode] = useState("light");
  const [alert, newAlert] = useState(null);

  const modeToggle = () => {
    if (mode === "light") {
      toggleMode("dark");
      document.body.style.backgroundColor = "#1f1f1f";
    } else {
      toggleMode("light");
      document.body.style.backgroundColor = "white";
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
        <Route path="/" element={<TextFieldUtils mode={mode} showAlert={showAlert} />}/>
      </Routes>
    </Router>
  );
}

export default App;
