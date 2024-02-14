import { ChangeEvent, useState } from "react";
import Client from "../../../@types/Client";
import { editClient } from "../../../actions/Client/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
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

interface ClientEditPropsType {
  client: Client;
  refresh: () => void;
}

const ClientEdit = ({ client, refresh }: ClientEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [nom, setNom] = useState<string>(client.nom);
  const [prenom, setPrenom] = useState<string>(client.prenom);
  const [password, setPassword] = useState<string>(client.password);
  const [num_tel, setNum_Tel] = useState<string>(client.num_tel);
  const [adresse, setAdresse] = useState<string>(client.adresse);
  const [coverPath, setCoverPath] = useState<any>();
  const [num_cin, setNum_cin] = useState<number>();

  const [passwordShown, setPasswordShown] = useState(false);

  const handleNomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch(`http://localhost:5000/upload/cover`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCoverPath(`http://localhost:5000/upload/cover/${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoverPath(undefined);
      });
  };

  const submit = () => {
    const newClient = {
      _id: client._id,
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      coverPath,
      num_cin,
    };
    editClient(newClient, () => {
      refresh();
      setIsOpened(false);
      reset(newClient);
    });
  };

  const reset = (client: Client) => {
    setNom(client.nom);
    setPrenom(client.prenom);
    setPassword(client.password);
    setNum_Tel(client.num_tel);
    setAdresse(client.adresse);
    setCoverPath(client.coverPath);
    setNum_cin(0);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };

  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faPen} width={50} />
      </span>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          style={{ backgroundColor: "#1976d2", color: "white" }}
          toggle={() => setIsOpened(!isOpened)}
        >
          <span>Modifier-Client</span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Nom</Label>
              <Input
                value={nom}
                id="nom"
                name="nom"
                type="text"
                onChange={handleNomChange}
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
              <Label for="password">Mot de passe</Label>
              <div className="d-flex justify-content-between">
                <Input
                  value={password}
                  id="password"
                  name="password"
                  onChange={handlePasswordChange}
                  type={passwordShown ? "text" : "password"}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  style={{
                    color: "white",
                    cursor: "pointer",
                    backgroundColor: "#1976d2",
                    border: 0,
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </Button>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="num_tel">Numero de telephone</Label>
              <Input
                value={num_tel}
                id="num_tel"
                name="num_tel"
                type="text"
                onChange={(e) => setNum_Tel(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="adresse">Adresse</Label>
              <Input
                value={adresse}
                id="adresse"
                name="adresse"
                type="text"
                onChange={(e) => setAdresse(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="adresse">Importer votre image</Label>
              <Input
                id="coverPath"
                name="coverPath"
                type="file"
                onChange={changeCoverHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="num_tel">Numero de CIN</Label>
              <Input
                value={num_cin}
                id="num_cin"
                name="num_cin"
                type="number"
                onChange={(e) => setNum_cin(parseInt(e.target.value))}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter
          style={{
            backgroundColor: "#1976d2",
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

export default ClientEdit;
