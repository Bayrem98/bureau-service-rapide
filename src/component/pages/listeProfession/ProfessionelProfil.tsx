import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  Sheet,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Ouvrier from "../../../@types/Ouvrier";
import { getOuvriers } from "../../../actions/Ouvrier/action";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { Modal } from "@mui/material";
import { FormGroup, Input } from "reactstrap";
import { ArrowCircleLeftRounded } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProfessionelProfil = () => {
  let { prof } = useParams();
  let { userId } = useParams();
  const [ouvriers, setOuvriers] = useState<Ouvrier[]>([]);
  const [ouvrier, setOuvrier] = useState<Ouvrier | undefined>();
  const [boutonValider, setBoutonValider] = useState<string | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reclamation, setReclamation] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    getOuvriers({ profession: prof }, setOuvriers);
    if (ouvriers) {
      setOuvrier(ouvriers[0]);
    }
  }, [prof, userId, ouvriers]);

  const handleClick = (selectedOuvrier: any) => {
    setOuvrier(selectedOuvrier);
    if (selectedOuvrier._id) {
      setBoutonValider(selectedOuvrier._id);
    }
    localStorage.setItem("selectedOuvrier", selectedOuvrier._id);
  };

  const handleClickRemove = () => {
    localStorage.removeItem("selectedOuvrier");
    window.location.reload();
  };

  const handelAvis = (selectedOuvrier: Ouvrier, rate: number) => {
    console.log("Ouvrier dans handelAvis :", selectedOuvrier);
    if (!selectedOuvrier) {
      console.error("Ouvrier non défini !");
      return;
    }

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/ouvrier/updateavis/${selectedOuvrier._id}`,
        {
          avis: rate,
        }
      )
      .then((response) => {
        console.log("Avis ajouté pour l'ouvrier", response.data);
        const updatedOuvriers = ouvriers.map((ouv) => {
          if (ouv._id === selectedOuvrier._id) {
            return { ...ouv, avis: rate };
          }
          return ouv;
        });
        setOuvriers(updatedOuvriers);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'avis", error);
      });
  };

  const handleRating = (rate: number) => {
    if (ouvrier) {
      handelAvis(ouvrier, rate);
    }
  };

  const handleSubmitReclamation = () => {
    if (!ouvrier || !reclamation) {
      console.error("Ouvrier ou réclamation non définis !");
      return;
    }

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/ouvrier/updatereclam/${ouvrier._id}`,
        {
          reclamation: reclamation,
        }
      )
      .then((response) => {
        console.log("Réclamation envoyée pour l'ouvrier", response.data);
        // Mettre à jour l'état de l'ouvrier ou de la liste des ouvriers ici
        // Peut-être fermer la fenêtre modale après succès
        handleClose();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de la réclamation", error);
      });
  };

  return (
    <>
      <h3 className="prof-profil-page-title">Les Profils Disponible</h3>
      <ArrowCircleLeftRounded
        className="prof-profil-page-arrowback"
        color="primary"
        style={{ cursor: "pointer", fontSize: 50, marginLeft: 10 }}
        onClick={() => navigate(-1)}
      />
      <div className="prof-profil-page-section">
        <Box
          className="prof-profil-page-box-card"
          sx={{
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <div className="prof-profil-view-cards">
            {Array.isArray(ouvriers) &&
              ouvriers.map((ouvrier) => (
                <Card key={ouvrier._id} orientation="horizontal">
                  <AspectRatio
                    className="prof-profil-cards-image"
                    flex
                    ratio="1"
                  >
                    <img
                      src={ouvrier.coverPath}
                      srcSet={ouvrier.coverPath}
                      loading="lazy"
                      alt="."
                    />
                  </AspectRatio>
                  <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                      {ouvrier.nom} {ouvrier.prenom}
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      {ouvrier.profession}
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      {ouvrier.adresse}
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      {ouvrier.description}
                    </Typography>
                    <Sheet
                      sx={{
                        bgcolor: "background.level1",
                        borderRadius: "sm",
                        p: 1.5,
                        my: 1.5,
                        display: "flex",
                        gap: 2,
                        "& > div": { flex: 1 },
                      }}
                    >
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Avis
                        </Typography>
                        <Rating
                          size={35}
                          initialValue={ouvrier.avis}
                          onClick={handleRating}
                        />
                      </div>
                    </Sheet>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Card
                        variant="outlined"
                        color="primary"
                        style={{ height: 60 }}
                      >
                        {ouvrier.num_tel}
                      </Card>
                      {boutonValider === ouvrier._id && ouvrier._id ? (
                        <div>
                          <Link to={`/demandeenattente/${ouvrier._id}`}>
                            <Button
                              color="success"
                              style={{ height: 60 }}
                              onClick={() => handleClick(ouvrier)}
                            >
                              Valider la demande
                            </Button>
                          </Link>
                          <div>
                            <Button
                              color="danger"
                              style={{ height: 50, width: 90 }}
                              onClick={handleClickRemove}
                            >
                              Annuler
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={`https://wa.me/21652368419?text=je veux contacter ${ouvrier.nom} ${ouvrier.prenom} le ${ouvrier.profession}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="solid"
                            style={{ height: 60 }}
                            onClick={() => handleClick(ouvrier)}
                          >
                            Contacter
                          </Button>
                        </a>
                      )}
                    </Box>
                    <Box>
                      <p
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      >
                        Vos Réclamation
                      </p>
                    </Box>
                  </CardContent>
                </Card>
              ))}
          </div>
        </Box>
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button
                onClick={handleClose}
                style={{ float: "right", height: 5, width: 5 }}
                color="danger"
              >
                X
              </Button>
              <Typography id="modal-modal-title" component="h2">
                Réclamez vous :
              </Typography>
              <br />
              <FormGroup>
                <Input
                  value={reclamation}
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder="Vos Réclamation..."
                  onChange={(e) => setReclamation(e.target.value)}
                />
              </FormGroup>
              <Button
                onClick={handleSubmitReclamation}
                style={{ float: "right" }}
              >
                Valider
              </Button>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ProfessionelProfil;
