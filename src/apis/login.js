import axios from "axios";

export const RegisterApi = async (name, email, password) => {
  console.log("api call made", name, email, password);
  axios
    .post(`http://127.0.0.1:5000/register`, {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};

export const LoginApi = async (email, password) => {
  axios
    .post(`http://127.0.0.1:5000/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};
