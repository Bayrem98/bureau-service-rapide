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
import { useParams } from "react-router-dom";
import Ouvrier from "../../../@types/Ouvrier";
import { getOuvriers } from "../../../actions/Ouvrier/action";

const ProfessionelProfil = () => {
  let { prof } = useParams();
  const [ouvriers, setOuvriers] = useState<Ouvrier[]>([]);

  useEffect(() => {
    getOuvriers({ profession: prof }, setOuvriers);
  }, [prof]);

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
                <Card orientation="horizontal" style={{ marginRight: 20 }}>
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
                        <Typography fontWeight="lg">934</Typography>
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
                      <Card variant="outlined" color="neutral">
                        {ouvrier.num_tel}
                      </Card>
                      <a
                        href={`https://wa.me/${ouvrier.num_tel}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="solid"
                          color="primary"
                          style={{ height: 60 }}
                        >
                          Message
                        </Button>
                      </a>
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
