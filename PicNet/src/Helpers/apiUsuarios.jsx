import axios from "axios";

const url = "http://localhost:4000/api/";

export const obtenerUsuarios = () => {
    
  return axios
    .get(url + "/users")
    .then((response) => {
      return response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
