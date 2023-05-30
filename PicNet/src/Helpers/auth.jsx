import axios from "axios";

const url = "http://localhost:4000/api/auth/";


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
