import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { HowToReg } from "@mui/icons-material";
import { useState } from "react";
import { addClient } from "../../../actions/Client/action";

interface ClientAddPropsType {
  refresh: () => void;
}

const RegisterClient = (props: ClientAddPropsType) => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [num_tel, setNum_Tel] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [coverPath, setCoverPath] = useState<any>();
  const [num_cin, setNum_cin] = useState<string>("");

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

  const handleRegister = async () => {
    const newClient = {
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      coverPath,
      num_cin,
    };
    addClient(newClient, () => {
      window.location.replace("https://api.konnect.network/cS67Xntl8");
      props.refresh();
      reset();
    });
  };

  const reset = () => {
    setNom("");
    setPrenom("");
    setPassword("");
    setNum_Tel("");
    setAdresse("");
    setCoverPath("");
    setNum_cin("");
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <HowToReg />
          </Avatar>
          <Typography variant="h5">Inscription-Client</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="nom"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  autoFocus
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="prenom"
                  label="Prénom"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="num_tel"
                  label="Numéro de téléphone"
                  name="num_tel"
                  value={num_tel}
                  onChange={(e) => setNum_Tel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adresse"
                  label="Address"
                  name="adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="num_cin"
                  label="Numéro CIN"
                  name="num_cin"
                  value={num_cin}
                  onChange={(e) => setNum_cin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Importer votre image</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="coverPath"
                  name="coverPath"
                  type="file"
                  onChange={changeCoverHandler}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Inscrire
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterClient;
