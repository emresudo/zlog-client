import axios from "../../services/axios";

const login = async (email, password) => {
  const data = {
    email,
    password
  };
  return await axios
    .post("/login", data)
    .then(response => {
      return {
        type: "success",
        msg: response.data.message,
        token: response.data.webToken
      };
    })
    .catch(error => {
      return { type: "error", msg: error.response.data.message };
    });
};

export { login };
