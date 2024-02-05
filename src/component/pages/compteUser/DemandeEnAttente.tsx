import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { VerifiedUser } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const DemandeEnAttente = () => {
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
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Profil" />
              </ListItemButton>
            </Link>

            <Link to={"/demandeenattente"} style={{ textDecoration: "none" }}>
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
        <div style={{ marginTop: 100, marginRight: 100, marginBottom: 500 }}>
          <Card sx={{ display: "flex", width: 750 }}>
            <CardMedia
              component="img"
              sx={{ width: 170 }}
              image="/image/avatar/eva.jpg"
              alt="."
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Dévélopeuse
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Khalifa Yossra
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  Khzema, Sousse, Tunisie
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  10/02/2024
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
          <br />
          <Card sx={{ display: "flex", width: 750 }}>
            <CardMedia
              component="img"
              sx={{ width: 170 }}
              image="/image/avatar/ryan.jpg"
              alt="."
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Téchnicien Reseaux
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Ncir Yasser
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  El jem, Sfax, Tunisie
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  08/02/2024
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

export default DemandeEnAttente;
