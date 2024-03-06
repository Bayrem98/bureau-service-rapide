import {
  ContactMail,
  FacebookRounded,
  Instagram,
  LocationOnRounded,
  MailRounded,
  PhoneEnabledRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { addContact } from "../../actions/Contact/action";
import { FormGroup, Input } from "reactstrap";

const Contact = () => {
  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [num_tel, setNum_tel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = () => {
    const newContact = {
      nom,
      prenom,
      num_tel,
      email,
      message,
    };
    addContact(newContact, () => {
      window.location.reload();
      reset();
    });
  };
  const reset = () => {
    setNom("");
    setPrenom("");
    setNum_tel("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-section">
        <div className="d-flex justify-content-between">
          <div className="contact-soussection">
            <h4 className="contact-title">Nos Coordonnées</h4>
            <p className="contact-para">
              Notre équipe de professionnels se tient a votre disposition pour
              toute demande d'information pour notre application.
            </p>
            <br />
            <p className="contact-detail">
              <LocationOnRounded color="primary" />
              Rue de Haffouz, Sousse, Tunisie
            </p>
            <p className="contact-detail">
              <PhoneEnabledRounded color="primary" />
              +216 52 368 419
            </p>
            <p className="contact-detail">
              <PhoneEnabledRounded color="primary" />
              +216 92 209 214
            </p>
            <p className="contact-detail">
              <MailRounded color="primary" />
              bureau_S_R@gmail.com
            </p>
            <p className="contact-detail">
              <FacebookRounded color="primary" />
              Bureau-S-R
            </p>
            <p className="contact-detail">
              <Instagram color="primary" />
              Bureau-S-R
            </p>
          </div>
          <div>
            {" "}
            <Container maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  className="contact-avatar"
                  sx={{ m: 0, bgcolor: "primary.light", width: 50, height: 50 }}
                >
                  <ContactMail />
                </Avatar>

                <Box sx={{ mt: 0 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nom"
                    label="Nom"
                    name="nom"
                    autoFocus
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="prenom"
                    label="Prénom"
                    name="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="num_tel"
                    name="num_tel"
                    label="Numéro de téléphone"
                    type="email"
                    value={num_tel}
                    onChange={(e) => setNum_tel(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormGroup>
                    <Input
                      value={message}
                      id="message"
                      name="message"
                      type="textarea"
                      placeholder="Message ou commentaire..."
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FormGroup>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 0, mb: 2 }}
                    onClick={submit}
                  >
                    Valider
                  </Button>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
        <iframe
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d324.10394234298707!2d10.629031131681858!3d35.83467732550011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d35.8348425!2d10.6291741!4m3!3m2!1d35.8348425!2d10.6291741!5e0!3m2!1sfr!2stn!4v1706806939400!5m2!1sfr!2stn"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
