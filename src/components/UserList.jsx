import React, { useEffect, useState } from "react";

const UserList = ({ endponint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${endponint}`
        );

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, [endponint]);
  return (
    <>
      <ul>
        {endponint == "users"
          ? data.map((usr) => <li key={usr.id}>{usr.name}</li>)
          : data.map((usr) => <li key={usr.id}>{usr.body}</li>)}
      </ul>
    </>
  );
};

export default UserList;
