import axios from "axios";
import Cookies from "js-cookie";

export function loginAdmin(
  num_tel: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/auth/loginadmin`, {
      num_tel: num_tel,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
      fallback();
    });
}

export function loginC(
  num_tel: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`https://localhost:3000/auth/login`, {
      num_tel: num_tel,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
      fallback();
    });
}

export function loginO(
  num_tel: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/auth/logina`, {
      num_tel: num_tel,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
      fallback();
    });
}

export function logoutAdmin() {
  Cookies.remove("access_token");
  window.location.reload();
}

export function logoutClient() {
  localStorage.removeItem("access_token");
  window.location.reload();
}

export function logoutOuvrier() {
  localStorage.removeItem("access_token");
  window.location.reload();
}
