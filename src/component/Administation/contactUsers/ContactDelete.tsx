import { useState } from "react";
import Contact from "../../../@types/Contact";
import { deleteContact } from "../../../actions/Contact/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ContactDeletePropsType {
  contact: Contact;
  refresh: () => void;
}

const ContactDelete = ({ contact, refresh }: ContactDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteContact(contact, () => {
      refresh();
      setIsOpened(false);
    });
  };
  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faRemove} />
      </span>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          Supprimer Contact
        </ModalHeader>
        <ModalBody>
          Voulez-vous supprimer {contact.nom},{contact.prenom} ?
        </ModalBody>
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

export default ContactDelete;
