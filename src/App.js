import "./App.css";
import Nav from "./components-jsx/Nav/Nav.jsx";
import Cards from "./components-jsx/Cards/Cards.jsx";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components-jsx/About/About";
import Detail from "./components-jsx/Detail/Detail";
import Loguin from "./components-jsx/Login/Loguin";

function App() {
  const [characters, setCharacters] = useState([]);

  const eliminar = (id) => {
    setCharacters(characters.filter((characters) => id != characters.id));
  };

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={useLocation().pathname == "/" ? "noMostrar" : "mostrar"}>
        <Nav path="/" onSearch={(id) => onSearch(id)} />
      </div>

      <Routes>
        <Route exact path="/" element={<Loguin />} />
        <Route path="/About" element={<About />} />

        <Route
          path="/Home"
          element={<Cards characters={characters} eliminar={eliminar} />}
        />

        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
