import "./App.css";
import Card from "./components-jsx/Card/Card.jsx";
import Cards from "./components-jsx/Cards/Cards.jsx";
import SearchBar from "./components-jsx/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className="cartasCon">
        <Cards characters={characters} />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
