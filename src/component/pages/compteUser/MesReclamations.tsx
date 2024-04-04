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
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Ouvrier from "../../../@types/Ouvrier";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Client from "../../../@types/Client";
import { getClient } from "../../../actions/Client/action";

const MesReclamations = () => {
  let { userId } = useParams();
  const [ouvriers, setOuvriers] = useState<Ouvrier[]>([]);
  const [client, setClient] = useState<Client>();

  useEffect(() => {
    if (userId) {
      getClient(userId, setClient);
    }
  }, [userId]);

  useEffect(() => {
    const fetchReclamations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/client/${userId}/reclamations`
        );
        setOuvriers(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des réclamations :",
          error
        );
      }
    };

    fetchReclamations();
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
        <div className="section-reclam">
          {ouvriers.length ? (
            ouvriers.map((ouvrier) => (
              <Card
                className="card-reclam"
                key={ouvrier._id}
                sx={{ display: "flex" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {ouvrier.nom} {ouvrier.prenom}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      {ouvrier.profession}
                    </Box>
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
                      {ouvrier.reclamation}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))
          ) : (
            <span
              className="text-center"
              style={{ position: "relative", right: 460, top: 50 }}
            >
              <FontAwesomeIcon icon={faBoxOpen} size="8x" />
              <br />
              Pas des données ici...
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default MesReclamations;
