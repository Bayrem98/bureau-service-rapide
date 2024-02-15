import axios from "axios";

export function loginAdmin(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`http://localhost:5000/auth/loginadmin`, {
      username: username,
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
    .post(`http://localhost:5000/auth/login`, {
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
    .post(`http://localhost:5000/auth/logina`, {
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
  localStorage.removeItem("access_token");
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
