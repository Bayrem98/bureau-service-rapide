import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountBox,
  NoteAltRounded,
  PaddingRounded,
  VerifiedRounded,
  VerifiedUser,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MesReclamations = () => {
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
            <Link to={"/mesreclamations"} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <NoteAltRounded color="primary" />
                </ListItemIcon>
                <ListItemText primary="Mes reclamations" />
              </ListItemButton>
            </Link>
          </List>
        </div>
        <div style={{ marginTop: 100, marginRight: 150, marginBottom: 500 }}>
          <Card sx={{ display: "flex", width: 750 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Nom de Professionel 1
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  01/02/2024
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Champ de reclamation
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
          <br />
          <Card sx={{ display: "flex", width: 750 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Nom de Professionel 2
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  05/02/2024
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Champ de reclamation
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
          <br />
          <Card sx={{ display: "flex", width: 750 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Nom de Professionel 3
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  08/02/2024
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Champ de reclamation
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

export default MesReclamations;
