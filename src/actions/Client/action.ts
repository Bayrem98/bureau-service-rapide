import axios from "axios";
import Client from "../../@types/Client";

export function getClients(callback: (data: Client[]) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/client`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getClient(id: string, callback: (data: Client) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/client/` + id, {
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

export function addClient(client: Client, callback: () => void) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/client`, client)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editClient(client: Client, callback: () => void) {
  axios
    .put(`${process.env.REACT_APP_API_URL}/client/${client._id}`, client)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteClient(client: Client, callback: () => void) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/client/${client._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
