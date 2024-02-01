import { useEffect, useState } from "react";
import { ButtonGroup, Input, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Client from "../../../@types/Client";
import ClientAdd from "./ClientAdd";
import { getClients } from "../../../actions/Client/action";
import ClientDelete from "./ClientDelete";

interface Props {}

const ClientsTable = (props: Props) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getClients(setClients);
  }, []);

  return (
    <div className="background-app">
      <div
        className="d-flex justify-content-between"
        style={{ paddingTop: 80, paddingLeft: 25, paddingRight: 25 }}
      >
        <h3>Tableau des Clients</h3>
        <div className="">
          <Input
            type="text"
            placeholder="Chercher içi..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <ClientAdd refresh={() => getClients(setClients)} />
      </div>
      <br />
      <div style={{ marginLeft: 50, marginRight: 50, paddingBottom: 420 }}>
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>password</th>
              <th>Numéro de téléphone</th>
              <th>adresse</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.length ? (
              clients
                .filter((client) =>
                  client.nom.toLowerCase().includes(filter.toLowerCase())
                )
                .map((client) => (
                  <tr key={client._id}>
                    <td>{client.nom}</td>
                    <td>{client.prenom}</td>
                    <td>{client.password}</td>
                    <td>{client.num_tel}</td>
                    <td>{client.adresse}</td>
                    <td style={{ textAlign: "center" }}>
                      <ButtonGroup>
                        <ClientDelete
                          client={client}
                          refresh={() => getClients(setClients)}
                        />
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
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
  );
};

export default ClientsTable;
