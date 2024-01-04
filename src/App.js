import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextFieldUtils from "./components/TextFieldUtils";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route
          path="/"
          element={<TextFieldUtils />}
        />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
