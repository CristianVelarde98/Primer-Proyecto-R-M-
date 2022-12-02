import { useState } from "react";

export default function SearchBar(props) {
  const [personaje, setPersonaje] = useState();
  let nombre = "";

  return (
    <div>
      <input
        type="search"
        onChange={(datoN) => {
          nombre = datoN.target.value;
        }}
      />
      <button
        onClick={() => {
          props.onSearch(nombre);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
