import "./App.css";
import Nav from "./components-jsx/Nav/Nav.jsx";
import Cards from "./components-jsx/Cards/Cards.jsx";
import React, { useState } from "react";

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
      <Nav onSearch={(id) => onSearch(id)} />

      <Cards characters={characters} eliminar={eliminar} />
    </div>
  );
}

export default App;
