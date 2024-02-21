import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountBox,
  NoteAltRounded,
  NotesRounded,
  PaddingRounded,
  VerifiedRounded,
  VerifiedUser,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Ouvrier from "../../../@types/Ouvrier";
import { getOuvrier } from "../../../actions/Ouvrier/action";
import Client from "../../../@types/Client";
import { getClient } from "../../../actions/Client/action";

const DemandeCloturee = () => {
  const [ouvrier, setOuvrier] = useState<Ouvrier | null>(null);
  const [client, setClient] = useState<Client | null>(null);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      getOuvrier(userId, setOuvrier);
      getClient(userId, setClient);
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
            <Link
              to={"/profil"}
              style={{ textDecoration: "none", color: "black" }}
            >
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
                  to={`/demandeenattente/${ouvrier?._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <PaddingRounded color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Demande en attente" />
                  </ListItemButton>
                </Link>
              </>
            )}
            <Link
              to={"/demandecloturee/:userId"}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <VerifiedRounded color="primary" />
                </ListItemIcon>
                <ListItemText primary="Demande cloturée" />
              </ListItemButton>
            </Link>
            {client && (
              <>
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
              </>
            )}
          </List>
        </div>
        <div style={{ marginTop: 100, marginRight: 100, marginBottom: 500 }}>
          <Card sx={{ display: "flex", width: 750 }}>
            <CardMedia
              component="img"
              sx={{ width: 170 }}
              image={ouvrier?.coverPath}
              alt="."
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {ouvrier?.profession}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {ouvrier?.nom} {ouvrier?.prenom}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  {ouvrier?.adresse}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  <span style={{ fontWeight: "bold" }}> Demande Cloturée</span>
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DemandeCloturee;
