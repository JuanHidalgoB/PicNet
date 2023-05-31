import { createContext, useState, useEffect } from "react";
import { obtenerUsuarios } from "../Helpers/apiUsuarios";
export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

/*   var user = {
    name: "Andres Hidalgo",
    nickname: "andrew_jungler",
    email: "andres_hidalgo@gmail.com",
    password: "123456",
  }; */

  useEffect(() => {
    obtenerUsuarios()
      .then((data) => {
        setUsers(data.usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
