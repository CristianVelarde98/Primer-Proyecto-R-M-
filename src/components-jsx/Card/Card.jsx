import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, gender, species, image, eliminar, id } = props;
  return (
    <div className={style.contenedor}>
      <div className={style.carta}>
        <button
          className={style.boton}
          onClick={() => {
            eliminar(id);
          }}
        >
          X
        </button>
        <div className={style.contenido}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
        <img className={style.imagenes} src={image} />
      </div>
    </div>
  );
}

//linea:1 hacemos distructoring de props y le pasamos los datos que queremos con un objeto literal
