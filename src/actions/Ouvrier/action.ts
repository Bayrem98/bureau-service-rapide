import axios from "axios";
import Ouvrier from "../../@types/Ouvrier";

export function getOuvriers(
  query: { nom?: string; profession?: string } | null,
  callback: (data: Ouvrier[]) => void
) {
  axios
    .get(`http://localhost:5000/ouvrier`, {
      params: query,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function getOuvrier(id: string, callback: (data: Ouvrier) => void) {
  axios
    .get(`http://localhost:5000/ouvrier/` + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addOuvrier(ouvrier: Ouvrier, callback: () => void) {
  axios
    .post(`http://localhost:5000/ouvrier`, ouvrier)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editOuvrier(ouvrier: Ouvrier, callback: () => void) {
  axios
    .put(`http://localhost:5000/ouvrier/${ouvrier._id}`, ouvrier)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteOuvrier(ouvrier: Ouvrier, callback: () => void) {
  axios
    .delete(`http://localhost:5000/ouvrier/${ouvrier._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
