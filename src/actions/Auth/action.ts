import axios from "axios";
import Cookies from "js-cookie";

export function loginC(
  nom: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`http://localhost:5000/auth/login`, {
      nom: nom,
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
  nom: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`http://localhost:5000/auth/logina`, {
      nom: nom,
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

export function logoutClient() {
  Cookies.remove("access_token_client");
  window.location.reload();
}

export function logoutOuvrier() {
  Cookies.remove("access_token_ouvrier");
  window.location.reload();
}
