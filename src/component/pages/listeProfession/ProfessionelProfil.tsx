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
import { Link, useParams } from "react-router-dom";
import Ouvrier from "../../../@types/Ouvrier";
import { getOuvriers } from "../../../actions/Ouvrier/action";

const ProfessionelProfil = () => {
  let { prof } = useParams();
  const [ouvriers, setOuvriers] = useState<Ouvrier[]>([]);
  const [boutonValider, setBoutonValider] = useState(false);

  useEffect(() => {
    getOuvriers({ profession: prof }, setOuvriers);
  }, [prof]);

  const handleClick = () => {
    setBoutonValider(true);
  };

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>
        Les Profils Disponible
      </h3>
      <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 250 }}>
        <Box
          sx={{
            width: 252,
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <div className="d-flex justify-content-between">
            {Array.isArray(ouvriers) &&
              ouvriers.map((ouvrier) => (
                <Card
                  key={ouvrier._id}
                  orientation="horizontal"
                  style={{ marginRight: 20 }}
                >
                  <AspectRatio
                    flex
                    ratio="1"
                    maxHeight={182}
                    sx={{ minWidth: 182 }}
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
                          Projets
                        </Typography>
                        <Typography fontWeight="lg">324</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Travail
                        </Typography>
                        <Typography fontWeight="lg">180</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Avis
                        </Typography>
                        <Typography fontWeight="lg">10</Typography>
                      </div>
                    </Sheet>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Card variant="outlined" color="primary">
                        {ouvrier.num_tel}
                      </Card>
                      {boutonValider ? (
                        <Link to={`/demandeenattente/${ouvrier._id}`}>
                          <Button
                            color="success"
                            style={{ height: 60 }}
                            onClick={handleClick}
                          >
                            Valider la demande
                          </Button>
                        </Link>
                      ) : (
                        <a
                          href={`https://wa.me/21652368419?text=je veux contacter ${ouvrier.nom} ${ouvrier.prenom} le ${ouvrier.profession}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="solid"
                            style={{ height: 60 }}
                            onClick={handleClick}
                          >
                            Contacter
                          </Button>
                        </a>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
          </div>
        </Box>
      </div>
    </>
  );
};

export default ProfessionelProfil;
