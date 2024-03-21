import { ChangeEvent, useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountBox,
  HowToReg,
  NoteAltRounded,
  PaddingRounded,
  VerifiedRounded,
  VerifiedUser,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Card } from "reactstrap";
import Client from "../../../@types/Client";
import Ouvrier from "../../../@types/Ouvrier";
import { editClient, getClient } from "../../../actions/Client/action";
import { getOuvrier } from "../../../actions/Ouvrier/action";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [client, setClient] = useState<Client | null>(null);
  const [ouvrier, setOuvrier] = useState<Ouvrier | null>(null);

  const [nom, setNom] = useState<string>(client?.nom ?? "");
  const [prenom, setPrenom] = useState<string>(client?.prenom ?? "");
  const [password, setPassword] = useState<string>(client?.password ?? "");
  const [num_tel, setNum_Tel] = useState<string>(client?.num_tel ?? "");
  const [adresse, setAdresse] = useState<string>(client?.adresse ?? "");
  const [coverPath, setCoverPath] = useState<any>(client?.coverPath ?? "");
  const [num_cin, setNum_cin] = useState<string>(client?.num_cin ?? "");

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      getClient(userId, setClient);
      getOuvrier(userId, setOuvrier);
    }
  }, [userId]);

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch(`${process.env.REACT_APP_API_URL}/cover`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCoverPath(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoverPath(undefined);
      });
  };

  const submit = () => {
    const newClient = {
      _id: client?._id,
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      coverPath,
      num_cin,
    };
    editClient(newClient, () => {
      window.location.reload();
      setIsOpened(false);
    });
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const handleNomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
      <div className="d-flex justify-content-between">
        <div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            style={{ marginTop: 50 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                *Votre Compte <VerifiedUser color="primary" />
              </ListSubheader>
            }
          >
            <Link to={"/profil"} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBox color="primary" />
                </ListItemIcon>
                <ListItemText primary="Profil" />
              </ListItemButton>
            </Link>
            {client && (
              <>
                <Link
                  to={`/demandeenattente/:userId`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <PaddingRounded color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Demande en attente" />
                  </ListItemButton>
                </Link>

                <Link
                  to={"/demandecloturee/:userId"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <VerifiedRounded color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Demande cloturée" />
                  </ListItemButton>
                </Link>
                <Link
                  to={"/mesreclamations"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <NoteAltRounded color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Mes reclamations" />
                  </ListItemButton>
                </Link>
              </>
            )}
          </List>
        </div>

        <div className="profilpage d-flex justify-content-between">
          <Card
            className="profil-page-card-image"
            style={{
              borderColor: "#1976d2",
              height: 220,
            }}
          >
            <IconButton className="profil-page-card-image-icon">
              <img
                className="profil-page-card-image-avatar"
                alt={client?.nom || ouvrier?.nom}
                src={
                  client ? client.coverPath : ouvrier ? ouvrier.coverPath : ""
                }
              />
            </IconButton>
          </Card>
          <Container maxWidth="xs">
            <CssBaseline />
            <Box className="profil-page-compte">
              <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                <HowToReg />
              </Avatar>
              <Typography variant="h6">Mon Compte</Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {client && (
                    <>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Nom:
                        </span>{" "}
                        {client.nom}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Prénom:
                        </span>{" "}
                        {client.prenom}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Numéro de téléphone:
                        </span>{" "}
                        {client.num_tel}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Numéro de CIN:
                        </span>{" "}
                        {client.num_cin}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Adresse:
                        </span>{" "}
                        {client.adresse}
                      </Grid>
                      <br />
                      <br />
                      <br />
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setIsOpened(true)}
                      >
                        Modifier
                      </Button>
                    </>
                  )}
                  {ouvrier && (
                    <>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Nom:
                        </span>{" "}
                        {ouvrier.nom}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Prénom:
                        </span>{" "}
                        {ouvrier.prenom}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Numéro de téléphone:
                        </span>{" "}
                        {ouvrier.num_tel}
                      </Grid>{" "}
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Numéro de CIN:
                        </span>{" "}
                        {ouvrier.num_cin}
                      </Grid>{" "}
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Adresse:
                        </span>{" "}
                        {ouvrier.adresse}
                      </Grid>
                      <Grid item xs={12}>
                        <span
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#1976d2",
                          }}
                        >
                          Profession:
                        </span>{" "}
                        {ouvrier.profession}
                      </Grid>
                    </>
                  )}
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
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
          <span>Modifier</span>
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
                onChange={(e) => setNum_cin(e.target.value)}
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

export default Profile;
