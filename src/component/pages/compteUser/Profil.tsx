import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { HowToReg, VerifiedUser } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  TextField,
  Typography,
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import { Card } from "reactstrap";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

export interface MUIPhoneProps extends BaseTextFieldProps {
  value: string;
  onChange: (phone: string) => void;
}

const Profile = () => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [num_tel, setNum_Tel] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");

  const { inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: "us",
    value: "",
    countries: defaultCountries,
    onChange: (data) => {
      setNum_Tel(data.phone);
    },
  });

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
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Profil" />
              </ListItemButton>
            </Link>
            <Link
              to={"/demandeenattente"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Demande en attente" />
              </ListItemButton>
            </Link>
            <Link
              to={"/demandecloturee"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
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
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Mes reclamations" />
              </ListItemButton>
            </Link>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Mes avis" />
            </ListItemButton>
          </List>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: -100, marginRight: 150, marginBottom: 200 }}
        >
          <Card
            style={{
              marginTop: 270,
              width: 250,
              height: 300,
              borderColor: "#1976d2",
              marginRight: 30,
            }}
          >
            <IconButton style={{ marginLeft: 15, marginRight: 15 }}>
              <Avatar
                alt="Remy Sharp"
                src="/image/avatar/ryan.jpg"
                style={{ width: 200, height: 200 }}
              />
            </IconButton>
            <Button
              variant="contained"
              style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}
            >
              Importer Votre photo
            </Button>
          </Card>
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
                <HowToReg />
              </Avatar>
              <Typography variant="h5">
                Tu peux modifier vous données
              </Typography>
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
                      type="tel"
                      inputRef={inputRef}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginRight: "2px", marginLeft: "-8px" }}
                          >
                            <Select
                              MenuProps={{
                                style: {
                                  height: "300px",
                                  width: "360px",
                                  top: "10px",
                                  left: "-34px",
                                },
                                transformOrigin: {
                                  vertical: "top",
                                  horizontal: "left",
                                },
                              }}
                              sx={{
                                width: "max-content",
                                // Remove default outline (display only on focus)
                                fieldset: {
                                  display: "none",
                                },
                                '&.Mui-focused:has(div[aria-expanded="false"])':
                                  {
                                    fieldset: {
                                      display: "block",
                                    },
                                  },
                                // Update default spacing
                                ".MuiSelect-select": {
                                  padding: "8px",
                                  paddingRight: "24px !important",
                                },
                                svg: {
                                  right: 0,
                                },
                              }}
                              value={country.iso2}
                              onChange={(e) =>
                                setCountry(e.target.value as CountryIso2)
                              }
                              renderValue={(value) => (
                                <FlagImage
                                  iso2={value}
                                  style={{ display: "flex" }}
                                />
                              )}
                            >
                              {defaultCountries.map((c) => {
                                const country = parseCountry(c);
                                return (
                                  <MenuItem
                                    key={country.iso2}
                                    value={country.iso2}
                                  >
                                    <FlagImage
                                      iso2={country.iso2}
                                      style={{ marginRight: "8px" }}
                                    />
                                    <Typography marginRight="8px">
                                      {country.name}
                                    </Typography>
                                    <Typography color="gray">
                                      +{country.dialCode}
                                    </Typography>
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </InputAdornment>
                        ),
                      }}
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
                </Grid>
                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Valider
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Profile;
