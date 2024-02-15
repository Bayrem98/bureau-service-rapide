import { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountBox,
  HowToReg,
  NoteAltRounded,
  NotesRounded,
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
import Admin from "../../../@types/Admin";
import { getClient } from "../../../actions/Client/action";
import { getOuvrier } from "../../../actions/Ouvrier/action";
import { getAdmin } from "../../../actions/Admin/action";

const Profile = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [ouvrier, setOuvrier] = useState<Ouvrier | null>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      getClient(userId, setClient);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getOuvrier(userId, setOuvrier);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getAdmin(userId, setAdmin);
    }
  }, [userId]);

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
            <Link
              to={"/demandeenattente"}
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
              to={"/demandecloturee"}
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
            <ListItemButton>
              <ListItemIcon>
                <NotesRounded color="primary" />
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
              marginTop: 260,
              width: 250,
              height: 220,
              borderColor: "#1976d2",
              marginRight: 30,
            }}
          >
            <IconButton style={{ marginLeft: 15, marginRight: 15 }}>
              <Avatar
                alt="Remy Sharp"
                src={client?.coverPath}
                style={{ width: 200, height: 200 }}
              />
            </IconButton>
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
                Mon Compte
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    Nom: {client?.nom}
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    Prénom: {client?.prenom}
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    Numéro de téléphone: {client?.num_tel}
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    Numéro de CIN: {client?.num_cin}
                  </Grid>
                  <Grid item xs={12}>
                    Adresse: {client?.adresse}
                  </Grid>
                </Grid>
                <br />
                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Modifier
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
