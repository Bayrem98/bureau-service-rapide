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
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";

const Login = () => {
  const [nom, setNom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isClient, setIsClient] = useState(true);
  const [isOuvrier, setIsOuvrier] = useState(false);

  const toggleRole = () => {
    setIsClient((prevIsClient) => !prevIsClient);
    setIsOuvrier(false);
  };

  const toggleOuvrier = () => {
    setIsOuvrier((prevIsOuvrier) => !prevIsOuvrier);
    setIsClient(false);
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const authEndpoint = isClient
      ? "login"
      : isOuvrier
      ? "logina"
      : "loginadmin";

    axios
      .post(`http://localhost:5000/auth/${authEndpoint}`, {
        nom,
        password,
      })
      .then(({ data }) => {
        localStorage.getItem("access_token");
        console.log(data);

        if (isClient || isOuvrier) {
          localStorage.getItem("access_token");
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
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Form>
            <Box sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <InputLabel>Tu es qui ?</InputLabel>
                <Select
                  required
                  fullWidth
                  id="role"
                  label="Tu es qui ?"
                  name="role"
                  autoFocus
                  value={isClient ? "client" : isOuvrier ? "ouvrier" : "admin"}
                  onChange={(e) => {
                    const selectedRole = e.target.value;
                    if (selectedRole === "client") {
                      toggleRole();
                    } else if (selectedRole === "ouvrier") {
                      toggleOuvrier();
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
                id="nom"
                label="Nom"
                name="nom"
                autoFocus
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
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
                <span>
                  Connecte en tant que{""}
                  {isClient ? "client" : isOuvrier ? "ouvrier" : "admin"}
                </span>
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <Link to="/role">Don't have an account? Register</Link>
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
