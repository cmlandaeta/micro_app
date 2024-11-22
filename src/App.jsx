import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AgregarTarea from "./components/AgregarTarea";
import UserApps from "./components/UserApps";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : " 🚫 "}
    </li>
  );
};

let listado = [
  { id: 1, nombre: "Intalaciones Necesarias", visto: true },
  { id: 2, nombre: "Curso Pyhton", visto: true },
  { id: 3, nombre: "Curso React", visto: true },
  { id: 4, nombre: "Curso Angular", visto: false },
];

function App() {
  const [arreglo, setArreglo] = useState(listado);

  const astask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: true }]);
  };

  const onAgregarTarea = (tarea) => {
    let valor = tarea.trim();
    if (valor < 1) return;
    const envio = {
      id: arreglo.length + 1,
      nombre: valor,
      visto: false,
    };

    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1>Listado</h1>
      <AgregarTarea agregartarea={onAgregarTarea} />
      <ol>
        {arreglo.map((comp) => (
          <Items key={comp.id} nombre={comp.nombre} visto={comp.visto}></Items>
        ))}
      </ol>
      <UserApps />
    </>
  );
}

export default App;
