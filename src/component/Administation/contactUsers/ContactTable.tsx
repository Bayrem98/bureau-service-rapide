import { useEffect, useState } from "react";
import Contact from "../../../@types/Contact";
import { getContacts } from "../../../actions/Contact/action";
import { Input, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import ContactDelete from "./ContactDelete";

interface Props {}

const ContactsTable = (props: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getContacts(setContacts);
  }, []);

  return (
    <>
      <div className="background-app">
        <div className="table d-flex justify-content-between">
          {" "}
          <h3 className="table-data-title">
            Message et Commentaire des Utilisateurs
          </h3>
          <div className="input-search">
            <Input
              type="text"
              placeholder="Chercher içi..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="table-data">
          <Table bordered responsive hover>
            <thead>
              <tr className="table-head">
                <th>Nom</th>
                <th>Prénom</th>
                <th>Numéro de Tél</th>
                <th>Email</th>
                <th>Message/Commentaire</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length ? (
                contacts
                  .filter((contact) =>
                    contact.nom
                      .toLowerCase()
                      .includes(filter.toLocaleLowerCase())
                  )
                  .map((contact) => (
                    <tr key={contact._id} className="table-body">
                      <td>{contact.nom}</td>
                      <td>{contact.prenom}</td>
                      <td>{contact.num_tel}</td>
                      <td>{contact.email}</td>
                      <td>{contact.message}</td>
                      <td>
                        <ContactDelete
                          contact={contact}
                          refresh={() => getContacts(setContacts)}
                        />
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center">
                    <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                    <br />
                    Pas des données...
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ContactsTable;
