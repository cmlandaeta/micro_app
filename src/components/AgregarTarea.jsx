import React, { useState } from "react";

const AgregarTarea = ({ agregartarea }) => {
  const [inputValue, SetInputValue] = useState("");

  const onInputChange = (e) => {
    SetInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    agregartarea(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        value={inputValue}
        placeholder="Ingresa la Tarea"
        type="text"
      />
    </form>
  );
};

export default AgregarTarea;
