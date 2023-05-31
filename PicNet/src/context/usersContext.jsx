import { createContext, useState, useEffect } from "react";
import { obtenerUsuarios } from "../Helpers/apiUsuarios";
export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    obtenerUsuarios()
      .then((data) => {
        setUsers(data.usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  return (
    <UsersContext.Provider
      value={{
        currentUser,
        users,
        setCurrentUser
      }}
    >
      {" "}
      {props.children}
    </UsersContext.Provider>
  );
};
