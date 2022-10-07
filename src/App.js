/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import "./App.css";
import CharactersList from "./pages/CharactersList";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Search from "./pages/Search/Search";

/**
 * Third Party Dependencies
 */
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
