import { useState, React } from "react";
import validate from "./validation.js";

export default function Loguin(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    const propiedad = evento.target.name;
    const valor = evento.target.value;

    setUserData({ ...userData, [propiedad]: valor });

    setErrors(
      validate({
        ...userData,
        [propiedad]: valor,
      })
    );
  };

  console.log("🚀 ~ file: Loguin.jsx:14 ~ Loguin ~ errors", errors);
  return (
    <div>
      <form>
        <input name="username" type="text" onChange={handleInputChange} />
        <label>Usuario</label>

        <input name="password" type="password" onChange={handleInputChange} />
        <label>Password</label>

        <button>Ingresar</button>
      </form>
    </div>
  );
}
