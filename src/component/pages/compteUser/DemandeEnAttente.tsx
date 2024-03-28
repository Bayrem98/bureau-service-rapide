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
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Ouvrier from "../../../@types/Ouvrier";
import { getOuvrier } from "../../../actions/Ouvrier/action";
import { Button } from "@mui/material";

const DemandeEnAttente = () => {
  const [ouvrier, setOuvrier] = useState<Ouvrier | null>(null);
  const [date, setDate] = useState<string>(
    localStorage.getItem("dateDemande") || ""
  );

  useEffect(() => {
    const storedOuvrierId = localStorage.getItem("selectedOuvrier");
    if (storedOuvrierId) {
      getOuvrier(storedOuvrierId, (result: Ouvrier) => {
        setOuvrier(result);
        if (!date) {
          const now = new Date();
          const dateString = now.toLocaleDateString();
          localStorage.setItem("dateDemande", dateString);
          setDate(dateString);
        }
      });
    }
  }, [date]);

  const handleClickRemove = () => {
    localStorage.removeItem("selectedOuvrier");
    localStorage.removeItem("dateDemande");
    setDate(""); // Réinitialiser la date dans l'état local
  };

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
              to={`/demandeenattente/${ouvrier?._id}`}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <PaddingRounded color="primary" />
                </ListItemIcon>
                <ListItemText primary="Demande en attente" />
              </ListItemButton>
            </Link>
            <Link
              to={`/demandecloturee/${ouvrier?._id}`}
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
          </List>
        </div>
        {ouvrier ? (
          <div style={{ marginTop: 100, marginRight: 100, marginBottom: 500 }}>
            <Card sx={{ display: "flex", width: 750 }} key={ouvrier._id}>
              <CardMedia
                component="img"
                sx={{ width: 170 }}
                image={ouvrier.coverPath}
                alt="."
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {ouvrier.profession}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {ouvrier.nom} {ouvrier.prenom}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {ouvrier.adresse}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Date de Demande: {date}
                    </span>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 30,
                    pb: 1,
                    pt: 2,
                  }}
                >
                  <Button variant="outlined" onClick={handleClickRemove}>
                    Cloturée
                  </Button>
                </Box>
              </Box>
            </Card>
          </div>
        ) : (
          <div style={{ marginTop: 100, marginRight: 100, marginBottom: 500 }}>
            <Card sx={{ display: "flex", width: 750 }}>
              <CardMedia component="img" sx={{ width: 170 }} image="" alt="." />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Profession
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Nom Prénom
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    Adresse
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      Date de Demande: JJ/MM/AA
                    </span>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 30,
                    pb: 1,
                    pt: 2,
                  }}
                ></Box>
              </Box>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default DemandeEnAttente;
