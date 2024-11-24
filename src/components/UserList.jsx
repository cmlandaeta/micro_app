import React, { useEffect, useState } from "react";

import { useFetchData } from "./hooks/useFetchData";

const UserList = ({ endponint }) => {
  const { data, isLoadind } = useFetchData(endponint);

  return (
    <>
      <ul>
        {isLoadind ? (
          <p>Cargando</p>
        ) : endponint == "users" ? (
          data.map((usr) => <li key={usr.id}>{usr.name}</li>)
        ) : (
          data.map((usr) => <li key={usr.id}>{usr.body}</li>)
        )}
      </ul>
    </>
  );
};

export default UserList;
