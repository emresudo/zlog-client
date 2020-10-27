import axios from "../../services/axios";

const Register = async ({
  fullname,
  username,
  email,
  password,
  confirmPassword
}) => {
  const data = {
    fullname,
    username,
    email,
    password,
    confirmPassword
  };
  return await axios
    .post("/register", data)
    .then(response => {
      return { type: "success", msg: response.data.message };
    })
    .catch(error => {
      return { type: "error", msg: error.response.data.message };
    });
};

export { Register };
