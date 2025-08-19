// import React, { useState } from "react";
import "./App.css";
// import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentAlbum from "./Pages/CurrentAlbum/CurrentAlbum";

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music/:albumId" element={<CurrentAlbum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
