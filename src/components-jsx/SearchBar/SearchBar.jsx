import { useEffect, useState } from "react";

export default function SearchBar(props) {
  const [personaje, setPersonaje] = useState();
  const [text, setText] = useState();

  return (
    <div>
      <input
        placeholder="ID del personaje..."
        id="borrar"
        type="search"
        onChange={(textoID) => {
          setText(textoID.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          props.onSearch(text);
          setText("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
