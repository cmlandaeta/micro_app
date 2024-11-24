import React, { useState } from "react";
import UserList from "./UserList";

const UserApps = () => {
  const [endponint, setEnpoint] = useState("users");

  const handledfetch = () => {
    setEnpoint("comments");
  };
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList endponint={endponint} />
      <button onClick={handledfetch}>Llama a la APi</button>
    </div>
  );
};

export default UserApps;
