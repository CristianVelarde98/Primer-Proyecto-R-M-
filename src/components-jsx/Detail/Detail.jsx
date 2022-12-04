import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  const { name, status, specie, gender, image, origin } = character;
  const aux = { ...origin };

  return (
    <div className={style.contenedor}>
      <h2>{aux.name}</h2>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{specie}</h2>
      <h2>{gender}</h2>
      <img src={image} />
    </div>
  );
}
