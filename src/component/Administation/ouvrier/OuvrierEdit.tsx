import { ChangeEvent, useState } from "react";
import Ouvrier from "../../../@types/Ouvrier";
import { editOuvrier } from "../../../actions/Ouvrier/action";
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

interface OuvrierEditPropsType {
  ouvrier: Ouvrier;
  refresh: () => void;
}

const OuvrierEdit = ({ ouvrier, refresh }: OuvrierEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [nom, setNom] = useState<string>(ouvrier.nom);
  const [prenom, setPrenom] = useState<string>(ouvrier.prenom);
  const [password, setPassword] = useState<string>(ouvrier.password);
  const [num_tel, setNum_Tel] = useState<string>(ouvrier.num_tel);
  const [adresse, setAdresse] = useState<string>(ouvrier.adresse);
  const [profession, setProfession] = useState<string>(ouvrier.profession);
  const [coverPath, setCoverPath] = useState<any>(ouvrier.coverPath);
  const [num_cin, setNum_cin] = useState<any>(ouvrier.num_cin);
  const [description, setDescription] = useState<string>("");

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
    const newOuvrier = {
      _id: ouvrier._id,
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      profession,
      coverPath,
      num_cin,
      description,
    };
    editOuvrier(newOuvrier, () => {
      refresh();
      setIsOpened(false);
      reset(newOuvrier);
    });
  };

  const reset = (ouvrier: Ouvrier) => {
    setNom(ouvrier.nom);
    setPrenom(ouvrier.prenom);
    setPassword(ouvrier.password);
    setNum_Tel(ouvrier.num_tel);
    setAdresse(ouvrier.adresse);
    setProfession(ouvrier.profession);
    setCoverPath(ouvrier.coverPath);
    setNum_cin(ouvrier.num_cin);
    setDescription("");
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
          <span>Modifier-Professionel</span>
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
            <FormGroup>
              <Label for="coverPath">Importer votre image</Label>
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
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                value={description}
                id="description"
                name="description"
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
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

export default OuvrierEdit;
