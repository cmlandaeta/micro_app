import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : " 🚫 "}
    </li>
  );
};

let listado = [
  { nombre: "Intalaciones Necesarias", visto: true },
  { nombre: "Curso Pyhton", visto: true },
  { nombre: "Curso React", visto: true },
  { nombre: "Curso Angular", visto: false },
];

function App() {
  const [arreglo, setArreglo] = useState(listado);

  const astask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: true }]);
  };

  return (
    <>
      <h1>
        Listado
        <ol>
          {arreglo.map((comp) => (
            <Items key={comp.nombre} nombre={comp.nombre} visto={comp.visto}>
              {" "}
            </Items>
          ))}
        </ol>
        <button onClick={() => astask()}>Agregar Tareas</button>
      </h1>
    </>
  );
}

export default App;
