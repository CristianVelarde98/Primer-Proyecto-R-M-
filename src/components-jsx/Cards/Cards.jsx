import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props; // en lugar de hacer el distructoring en el parentecis lo hizo abajo
  return (
    <div className={style.cartas}>
      {characters.map((personaje, index) => {
        const { name, gender, species, image, id } = personaje;
        return (
          <Card
            id={id}
            key={index}
            name={name}
            species={species}
            gender={gender}
            image={image}
            eliminar={props.eliminar}
          />
        );
      })}
    </div>
  );
}
