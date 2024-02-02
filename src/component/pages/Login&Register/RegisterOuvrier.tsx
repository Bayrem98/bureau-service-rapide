import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { addOuvrier } from "../../../actions/Ouvrier/action";
import { Link, useNavigate } from "react-router-dom";

interface OuvrierAddPropsType {
  refresh: () => void;
}

const RegisterOuvrier = (props: OuvrierAddPropsType) => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [num_tel, setNum_Tel] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [profession, setProfession] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    const newOuvrier = {
      nom,
      prenom,
      password,
      num_tel,
      adresse,
      profession,
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
    setProfession("");
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Register</Typography>
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
                <TextField
                  required
                  fullWidth
                  id="profession"
                  label="Profession"
                  name="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterOuvrier;
