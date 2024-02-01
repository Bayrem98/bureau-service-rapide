import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ListSecteurPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const [expanded7, setExpanded7] = useState(false);
  const [expanded8, setExpanded8] = useState(false);
  const [expanded9, setExpanded9] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };

  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };

  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };

  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
      >
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  BTP
                </Avatar>
              }
              subheader="Section"
              title="Bâtiment, Travaux public"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/Bâtimenttravaux public.jpg"
              alt="Bâtiment, travaux public"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Le secteur des Bâtiments et Travaux Publics (BTP) englobe
                l'ensemble des activités liées à la construction, à la
                rénovation, à l'entretien et à la gestion des infrastructures
                publiques et privées.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Macon / Couvreur</Typography>
                <Typography>*Peintre en bâtiment</Typography>
                <Typography>*Menuisier</Typography>
                <Typography>*Charpentier</Typography>
                <Typography>*Serrurier</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  TL
                </Avatar>
              }
              subheader="Section"
              title="Transport et Logistique"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/TransportetLogistique.jpg"
              alt="Transport et Logistique"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Le secteur des services de Transport et Logistique constitue
                l'épine dorsale des échanges commerciaux et de la mobilité
                mondiale. Ces services englobent un large éventail d'activités
                allant du transport de marchandises.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Livreur</Typography>
                <Typography>*Transporteur</Typography>
                <Typography>*Chauffeur Taxi, Routier</Typography>
                <Typography>*Déménageur</Typography>
                <Typography>*Dépanneur-remorqueur</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  SBE
                </Avatar>
              }
              subheader="Section"
              title="Bonne Sante
              et Bien-etre"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/santebienetre.jpg"
              alt="Santé, bien être"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à la santé et au bien-être englobent un vaste
                éventail d'activités visant à promouvoir la santé physique,
                mentale et émotionnelle des individus. Ces services sont axés
                sur la prévention.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Auxiliaire de vie</Typography>
                <Typography>*Aide-Soignant</Typography>
                <Typography>*Infirmier</Typography>
                <Typography>*Medecin</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  AC
                </Avatar>
              }
              subheader="Section"
              title="Art et Culture Artistique"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/artculture.jpg"
              alt="Art, Culture"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à l'art et à la culture englobent un large
                éventail d'activités visant à promouvoir, préserver et enrichir
                l'expression créative, la diversité culturelle et l'héritage
                artistique. Ces services contribuent à la vie culturelle.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Cordonnier</Typography>
                <Typography>*Coiffeur</Typography>
                <Typography>*Photographe</Typography>
                <Typography>*Architecte</Typography>
                <Typography>*DJ</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  DSP
                </Avatar>
              }
              subheader="Section"
              title="Droit, sciences politiques"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/droitsciencespolitiques.jpg"
              alt="Droit, sciences politiques"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés au droit et aux sciences politiques englobent
                un ensemble d'activités visant à promouvoir, comprendre et
                appliquer les principes juridiques et politiques au sein d'une
                société.
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded4}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded4} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Avocat</Typography>
                <Typography>*Notaire</Typography>
                <Typography>*Juriste</Typography>
                <Typography>*Écrivain</Typography>
                <Typography>*Journaliste</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  AA
                </Avatar>
              }
              subheader="Section"
              title="Agriculture, Agroalimentaire"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/agricultureagroalimentaire.jpg"
              alt="Agriculture, Agroalimentaire"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à l'agriculture et à l'agroalimentaire
                englobent un large éventail d'activités visant à soutenir la
                production alimentaire, la transformation des produits
                agricoles, la distribution et la commercialisation des denrées
                alimentaires.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded5}
                onClick={handleExpandClick5}
                aria-expanded={expanded5}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded5} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Conseiller d'agricole</Typography>
                <Typography>*Jardinier/fleuriste</Typography>
                <Typography>*Soigneur animalier</Typography>
                <Typography>*Assistante paysagiste</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  HR
                </Avatar>
              }
              subheader="Section"
              title="Hôtellerie, Restauration"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/hôtellerierestauration.jpg"
              alt="Hôtellerie, Restauration,"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à l'hôtellerie et à la restauration englobent
                un ensemble d'activités visant à offrir des expériences
                agréables et satisfaisantes aux clients dans le domaine de
                l'hébergement, de la restauration et des services connexes.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded6}
                onClick={handleExpandClick6}
                aria-expanded={expanded6}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded6} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Cuisinier/Boulanger</Typography>
                <Typography>*Guide touristique</Typography>
                <Typography>*Serveur</Typography>
                <Typography>*Employé de restaurant</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  IEP
                </Avatar>
              }
              subheader="Section"
              title="Industrie-Energie-Production"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/industrieenergie.jpg"
              alt="Industrie-Energie-Production,"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services dans le secteur de l'Industrie, de l'Énergie et de
                la Production englobent un large éventail d'activités visant à
                soutenir la fabrication, la production d'énergie et d'autres
                processus industriels.
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded7}
                onClick={handleExpandClick7}
                aria-expanded={expanded7}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded7} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Plombier</Typography>
                <Typography>*Chauffagiste</Typography>
                <Typography>*Mécanicien</Typography>
                <Typography>*Electrecien</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  EF
                </Avatar>
              }
              subheader="Section"
              title="Ensignemant, formation"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/ensignemantformation.jpg"
              alt="Ensignemant, formation,"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à l'enseignement et à la formation englobent
                un large éventail d'activités visant à transmettre des
                connaissances, à développer des compétences et à favoriser le
                développement intellectuel et professionnel des individus.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded8}
                onClick={handleExpandClick8}
                aria-expanded={expanded8}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded8} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Éducateur sportif</Typography>
                <Typography>*Enseignant</Typography>
                <Typography>*Professeur</Typography>
                <Typography>*Formateur</Typography>
                <Typography>*Moniteur d'auto-école</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 220 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  CM
                </Avatar>
              }
              subheader="Section"
              title="Communication, multimédia"
            />
            <CardMedia
              component="img"
              height="150"
              image="/image/communicationmultimédia.jpg"
              alt="Communication, multimédia"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: 12 }}
              >
                Les services liés à la communication et au multimédia englobent
                un large éventail d'activités visant à transmettre des
                informations, à créer du contenu multimédia et à faciliter la
                diffusion de messages à travers différents canaux.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" color="error">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded9}
                onClick={handleExpandClick9}
                aria-expanded={expanded9}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded9} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Metier:</Typography>
                <Typography>*Developpeur</Typography>
                <Typography>*Designer</Typography>
                <Typography>*Infographiste</Typography>
                <Typography>*Réalisateur</Typography>
                <Typography>*Webmaster</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ListSecteurPage;
