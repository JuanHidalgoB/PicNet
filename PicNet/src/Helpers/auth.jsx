import axios from "axios";

const url = "https://backend-proyectoweb.up.railway.app/api/auth/";

export const logearUsuario = ({ email, password }) => {
  const user = { email, password };
  return axios
    .post(url + "login", user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};

export const registrarUsuario = ({ name, nickname, email, password }) => {
  const user = { name, nickname, email, password };
  return axios
    .post(url + "new", user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      let errorList = [];

      if (error.response.data.errors && Object.keys(error.response.data.errors).length > 0) {
        Object.values(error.response.data.errors).forEach((err) => {
          errorList.push(err.msg);
        });
      } else {
        errorList.push("Error desconocido");
      }
      const errorString = errorList.join("\n");
      alert(errorString);

      throw error.response.data;
    });
};
