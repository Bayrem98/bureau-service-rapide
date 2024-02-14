import { useEffect, useState } from "react";
import { ButtonGroup, Input, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Ouvrier from "../../../@types/Ouvrier";

import { getOuvriers } from "../../../actions/Ouvrier/action";
import OuvrierAdd from "./OuvrierAdd";
import OuvrierDelete from "./OuvrierDelete";
import OuvrierEdit from "./OuvrierEdit";

interface Props {}

const OuvriersTable = (props: Props) => {
  const [ouvriers, setOuvriers] = useState<Ouvrier[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getOuvriers(null, setOuvriers);
  }, []);

  return (
    <div className="background-app">
      <div
        className="d-flex justify-content-between"
        style={{ paddingTop: 80, paddingLeft: 25, paddingRight: 25 }}
      >
        <h3>Tableau des Ouvriers</h3>
        <div className="">
          <Input
            type="text"
            placeholder="Chercher içi..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <OuvrierAdd refresh={() => getOuvriers(null, setOuvriers)} />
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
              <th>Adresse</th>
              <th>Profession</th>
              <th>Photo</th>
              <th>Num-CIN</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {ouvriers.length ? (
              ouvriers
                .filter((ouvrier) =>
                  ouvrier.nom.toLowerCase().includes(filter.toLowerCase())
                )
                .map((ouvrier) => (
                  <tr key={ouvrier._id}>
                    <td>{ouvrier.nom}</td>
                    <td>{ouvrier.prenom}</td>
                    <td>{ouvrier.password}</td>
                    <td>{ouvrier.num_tel}</td>
                    <td>{ouvrier.adresse}</td>
                    <td>{ouvrier.profession}</td>
                    <td>
                      <img
                        alt={ouvrier.nom}
                        src={ouvrier.coverPath}
                        width={50}
                      />
                    </td>
                    <td>{ouvrier.num_cin}</td>
                    <td style={{ textAlign: "center" }}>
                      <ButtonGroup>
                        <OuvrierEdit
                          ouvrier={ouvrier}
                          refresh={() => getOuvriers(null, setOuvriers)}
                        />
                        <OuvrierDelete
                          ouvrier={ouvrier}
                          refresh={() => getOuvriers(null, setOuvriers)}
                        />
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center">
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

export default OuvriersTable;
