import { useState } from "react";
import { addContact } from "../../../actions/Contact/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

interface ContactAddPropsType {
  refresh: () => void;
}

const ContactAdd = (props: ContactAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [num_tel, setNum_tel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = () => {
    const newContact = {
      nom,
      prenom,
      num_tel,
      email,
      message,
    };
    addContact(newContact, () => {
      props.refresh();
      reset();
    });
  };

  const reset = () => {
    setNom("");
    setPrenom("");
    setNum_tel("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faPlus} width={50} />
      </span>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          style={{
            background:
              "linear-gradient(50deg,#c1c1f5 0, #cabef2 3.33%, #d3bcee 6.67%, #dbbae9 10%, #e2b8e4 13.33%, #e9b6de 16.67%, #eeb5d7 20%, #f3b3d0 23.33%, #f6b3c9 26.67%, #f9b2c2 30%, #fab3bb 33.33%, #fab3b4 36.67%, #fab4ae 40%, #f8b5a7 43.33%, #f5b7a2 46.67%, #f2b99d 50%, #eebb99 53.33%, #e9bd96 56.67%, #e3c093 60%, #ddc292 63.33%, #d6c491 66.67%, #cfc792 70%, #c7c994 73.33%, #c0cb97 76.67%, #b8cd9a 80%, #b0ce9f 83.33%, #a8d0a4 86.67%, #a0d1aa 90%, #98d2b0 93.33%, #91d3b7 96.67%, #8ad4be 100%)",
          }}
          toggle={() => setIsOpened(!isOpened)}
        >
          <span>Ajouter Contact</span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                value={nom}
                id="nom"
                name="nom"
                type="text"
                onChange={(e) => setNom(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prénom</Label>
              <Input
                value={prenom}
                id="prenom"
                name="prenom"
                type="text"
                onChange={(e) => setPrenom(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="num_tel">Numéro de tel</Label>
              <Input
                value={num_tel}
                id="num_tel"
                name="num_tel"
                type="text"
                onChange={(e) => setNum_tel(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                value={email}
                id="email"
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message ou Commentaire</Label>
              <Input
                value={message}
                id="message"
                name="message"
                type="textarea"
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter
          style={{
            background:
              "linear-gradient(50deg,#c1c1f5 0, #cabef2 3.33%, #d3bcee 6.67%, #dbbae9 10%, #e2b8e4 13.33%, #e9b6de 16.67%, #eeb5d7 20%, #f3b3d0 23.33%, #f6b3c9 26.67%, #f9b2c2 30%, #fab3bb 33.33%, #fab3b4 36.67%, #fab4ae 40%, #f8b5a7 43.33%, #f5b7a2 46.67%, #f2b99d 50%, #eebb99 53.33%, #e9bd96 56.67%, #e3c093 60%, #ddc292 63.33%, #d6c491 66.67%, #cfc792 70%, #c7c994 73.33%, #c0cb97 76.67%, #b8cd9a 80%, #b0ce9f 83.33%, #a8d0a4 86.67%, #a0d1aa 90%, #98d2b0 93.33%, #91d3b7 96.67%, #8ad4be 100%)",
          }}
        >
          <Button
            style={{
              backgroundColor: "#ddd9d5",
              border: 0,
              color: "black",
              borderRadius: 10,
            }}
            onClick={submit}
          >
            Valider
          </Button>{" "}
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              border: 0,
              borderRadius: 10,
            }}
            onClick={() => setIsOpened(false)}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ContactAdd;
