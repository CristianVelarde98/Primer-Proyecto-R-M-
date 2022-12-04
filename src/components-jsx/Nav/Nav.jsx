import About from "../About/About";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {
  console.log(useLocation().pathname);
  return (
    <div className={style.barra}>
      <div>
        <SearchBar onSearch={(id) => props.onSearch(id)} />

        <Link to={"/Home"}>
          <button>Ir a Inicio</button>
        </Link>

        <Link to={"/About"}>
          <button>Conocer al CREADOR</button>
        </Link>
      </div>
    </div>
  );
}
