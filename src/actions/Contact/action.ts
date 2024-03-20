import axios from "axios";
import Contact from "../../@types/Contact";

export function getContacts(callback: (data: Contact[]) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/contact`, {
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

export function getContact(id: string, callback: (data: Contact) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/contact/` + id, {
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

export function addContact(contact: Contact, callback: () => void) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/contact`, contact)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editContact(contact: Contact, callback: () => void) {
  axios
    .put(`${process.env.REACT_APP_API_URL}/contact/${contact._id}`, contact)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteContact(contact: Contact, callback: () => void) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/contact/${contact._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
