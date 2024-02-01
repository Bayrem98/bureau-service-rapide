import { ContactMail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const Contact = () => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 395px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === "dark" ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === "dark" ? blue[600] : blue[200]
          };
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );
  return (
    <>
      <div style={{ marginTop: 10, marginLeft: 30, marginRight: 30 }}>
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
              sx={{ m: 0, bgcolor: "primary.light", width: 60, height: 60 }}
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
                value=""
                onChange={(e) => {}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                name="prenom"
                autoFocus
                value=""
                onChange={(e) => {}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="num_tel"
                name="num_tel"
                label="Numéro de téléphone"
                type="email"
                value=""
                onChange={(e) => {}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value=""
                onChange={(e) => {}}
              />
              <Textarea
                aria-label="minimum height"
                minRows={3}
                placeholder="Message ou Commentaire..."
              />

              <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                Valider
              </Button>
            </Box>
          </Box>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d324.10394234298707!2d10.629031131681858!3d35.83467732550011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d35.8348425!2d10.6291741!4m3!3m2!1d35.8348425!2d10.6291741!5e0!3m2!1sfr!2stn!4v1706806939400!5m2!1sfr!2stn"
          style={{ border: 0, width: "100%", height: 250 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
