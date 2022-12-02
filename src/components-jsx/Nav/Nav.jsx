import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.barra}>
      <div>
        <SearchBar onSearch={(id) => props.onSearch(id)} />;
      </div>
    </div>
  );
}
