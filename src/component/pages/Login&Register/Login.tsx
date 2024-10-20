import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  AlertTitle,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [num_tel, setNum_tel] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isClient, setIsClient] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const generateRandomTokenValue = () => {
    const token = uuidv4();
    return token;
  };

  const toggleRole = () => {
    setIsClient((prevIsClient) => !prevIsClient);
    setIsAdmin(false);
  };

  const toggleAdmin = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
    setIsClient(false);
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (
    event: any
  ) => {
    event.preventDefault();

    const authEndpoint = isClient ? "login" : isAdmin ? "loginadmin" : "logina";

    axios
      .post(`https://localhost:3000/auth/${authEndpoint}`, {
        num_tel,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.user.prenom);
        localStorage.setItem("user_id", data.user._id);
        console.log(data);

        if (isAdmin || isClient) {
          const token = generateRandomTokenValue();
          const cookieName = isAdmin
            ? "admin"
            : isClient
            ? "client"
            : "ouvrier";
          Cookies.set(
            `access_token_${cookieName}`,
            token,
            { expires: 20 / 24 } // 1 heure (1/24 de la journée)
          );
        }
        window.location.reload();
        navigateto();
        console.log(data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
        }
      });
  };

  const navigateto = () => {
    window.location.replace("/home");
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {errorMessage && (
            <Alert severity="error" style={{ width: "100%" }}>
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          )}
          <br />
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Connecter Vous</Typography>

          <Form>
            <Box sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <InputLabel>Tu es qui ? </InputLabel>
                <Select
                  required
                  fullWidth
                  id="role"
                  label="Tu es qui ?"
                  name="role"
                  autoFocus
                  value={isClient ? "client" : isAdmin ? "admin" : "ouvrier"}
                  onChange={(e) => {
                    const selectedRole = e.target.value;
                    if (selectedRole === "client") {
                      toggleRole();
                    } else if (selectedRole === "admin") {
                      toggleAdmin();
                    } else {
                      // Default to user role
                      toggleRole();
                    }
                  }}
                  defaultValue="client"
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="ouvrier">Professionel</MenuItem>
                  <MenuItem value="admin">Administrateur</MenuItem>
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                id="num_tel"
                label="Numéro de téléphone"
                name="num_tel"
                autoFocus
                value={num_tel}
                onChange={(e) => setNum_tel(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                <span>Connexion</span>
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <Link to="/role">Vous n'avez pas de compte? s'inscrire</Link>
                </Grid>
              </Grid>
            </Box>
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
