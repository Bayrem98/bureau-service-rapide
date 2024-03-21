import { useEffect, useState } from "react";
import { ButtonGroup, Input, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Client from "../../../@types/Client";
import ClientAdd from "./ClientAdd";
import { getClients } from "../../../actions/Client/action";
import ClientDelete from "./ClientDelete";
import ClientEdit from "./ClientEdit";

interface Props {}

const ClientsTable = (props: Props) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getClients(setClients);
  }, []);

  return (
    <div className="background-app">
      <div className="table d-flex justify-content-between">
        <h3 className="table-data-title">Tableau des Clients</h3>
        <div className="input-search">
          <Input
            type="text"
            placeholder="Chercher içi..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="plus">
          <ClientAdd refresh={() => getClients(setClients)} />
        </div>
      </div>
      <div className="table-data">
        <Table bordered responsive hover>
          <thead>
            <tr className="table-head">
              <th>Nom</th>
              <th>Prénom</th>
              <th>password</th>
              <th>Numéro de téléphone</th>
              <th>adresse</th>
              <th>Photo</th>
              <th>Num-CIN</th>
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
                  <tr key={client._id} className="table-body">
                    <td>{client.nom}</td>
                    <td>{client.prenom}</td>
                    <td>{client.password}</td>
                    <td>{client.num_tel}</td>
                    <td>{client.adresse}</td>
                    <td>
                      <img src={client.coverPath} alt={client.nom} width={50} />
                    </td>
                    <td>{client.num_cin}</td>
                    <td style={{ textAlign: "center" }}>
                      <ButtonGroup>
                        <ClientEdit
                          client={client}
                          refresh={() => getClients(setClients)}
                        />
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
                <td colSpan={8} className="text-center">
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
