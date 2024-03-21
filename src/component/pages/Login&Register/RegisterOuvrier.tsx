import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { HowToReg } from "@mui/icons-material";
import { useState } from "react";
import { addOuvrier } from "../../../actions/Ouvrier/action";
import { useNavigate } from "react-router-dom";

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

const RegisterOuvrier = (props: OuvrierAddPropsType) => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [num_tel, setNum_Tel] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [profession, setProfession] = useState<string>(fieldss[0].key);
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

  const navigate = useNavigate();

  const handleRegister = async () => {
    const newOuvrier = {
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      profession,
      coverPath,
      num_cin,
    };
    addOuvrier(newOuvrier, () => {
      navigate("/");
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
    setProfession(fieldss[0].key);
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
          <Typography variant="h5">Inscription-Professionel</Typography>
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
                  label="Password"
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
                <InputLabel>Profession</InputLabel>
                <Select
                  required
                  fullWidth
                  id="profession"
                  label="Profession"
                  name="profession"
                  autoFocus
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                >
                  {fieldss.map((f) => (
                    <MenuItem key={f.key} value={f.key}>
                      {f.name}
                    </MenuItem>
                  ))}
                </Select>
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

export default RegisterOuvrier;
