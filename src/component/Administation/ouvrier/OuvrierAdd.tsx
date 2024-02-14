import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
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
import { addOuvrier } from "../../../actions/Ouvrier/action";

const fieldss = [
  { key: "jardinier", name: "Jardinier" },
  { key: "menuisier", name: "Menuisier" },
  { key: "livreur", name: "Livreur" },
  { key: "demenageur", name: "Déménageur" },
  { key: "cuisinier", name: "Cuisinier" },
  { key: "infirmier", name: "Infirmier" },
  { key: "medecin", name: "Medecin" },
  { key: "plombier", name: "Plombier" },
  { key: "electrecien", name: "Electrecien" },
  { key: "coiffeur", name: "Coiffeur" },
  { key: "photographe", name: "Photographe" },
  { key: "professeur", name: "Professeur" },
  { key: "formateur", name: "Formateur" },
  { key: "developpeur", name: "Dévéloppeur" },
  { key: "infographiste", name: "Infographiste" },
  { key: "avocat", name: "Avocat" },
  { key: "juriste", name: "Juriste" },
  { key: "journaliste", name: "Journaliste" },
  { key: "ecrivain", name: "Écrivain" },
  { key: "dj", name: "DJ" },
];

interface OuvrierAddPropsType {
  refresh: () => void;
}
const OuvrierAdd = (props: OuvrierAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [num_tel, setNum_Tel] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [profession, setProfession] = useState<string>(fieldss[0].key);

  const [passwordShown, setPasswordShown] = useState(false);

  const handleNomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    const newOuvrier = {
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      profession,
    };
    addOuvrier(newOuvrier, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setNom("");
    setPrenom("");
    setPassword("");
    setNum_Tel("");
    setAdresse("");
    setProfession(fieldss[0].key);
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
          <span>Ajouter Formateur</span>
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
                    color: "black",
                    cursor: "pointer",
                    backgroundColor: "#ddd9d5",
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
              <Label for="profession">Profession</Label>
              <Input
                value={profession}
                id="profession"
                name="profession"
                type="select"
                onChange={(e) => setProfession(e.target.value)}
              >
                {fieldss.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
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

export default OuvrierAdd;
