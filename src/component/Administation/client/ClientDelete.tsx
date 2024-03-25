import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Client from "../../../@types/Client";
import { deleteClient } from "../../../actions/Client/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface ClientDeletePropsType {
  client: Client;
  refresh: () => void;
}

const ClientDelete = ({ client, refresh }: ClientDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteClient(client, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ cursor: "pointer" }}>
        <Button
          style={{
            backgroundColor: "red",
            color: "white",
            border: 0,
            width: 50,
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </span>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          Supprimer Utilisateur
        </ModalHeader>
        <ModalBody>Voulez-vous supprimer {client.nom} ?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
            Valider
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ClientDelete;
