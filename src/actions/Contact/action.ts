import axios from "axios";
import Contact from "../../@types/Contact";

export function getContacts(callback: (data: Contact[]) => void) {
  axios
    .get(`http://localhost:5000/contact`, {
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
    .get(`http://localhost:5000/contact/` + id, {
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
    .post(`http://localhost:5000/contact`, contact)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editContact(contact: Contact, callback: () => void) {
  axios
    .put(`http://localhost:5000/contact/${contact._id}`, contact)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteContact(contact: Contact, callback: () => void) {
  axios
    .delete(`http://localhost:5000/contact/${contact._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
