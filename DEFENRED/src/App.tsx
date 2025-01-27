/*
import Slider from "./componentes/Slider"
import Sections from "./componentes/Sections"
*/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
const App = () => {
  return (
    //<BrowserRouter>
      <Router>
      <Routes>
      <Route path="/" element={<Index />}>
      </Route>
      </Routes>
      </Router>
  );
};

export default App;
