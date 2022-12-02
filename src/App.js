import "./App.css";
import Nav from "./components-jsx/Nav/Nav.jsx";
import Cards from "./components-jsx/Cards/Cards.jsx";
import React, { useState } from "react";

function App() {
  const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };

  const [characters, setCharacters] = useState([example]);

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
      <div className="cartasCon">
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
