import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { RocketSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RolePage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <RocketSharp />
          </Avatar>
          <Typography variant="h5">Choissir Votre Role</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid className="d-flex justify-content-between">
              <Link to={"/registerouvrier"}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 5 }}
                  style={{ marginRight: 70, width: 200, height: 61 }}
                >
                  Vous etes Professionnel ?
                </Button>
              </Link>
              <Link to={"/registerclient"}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 5 }}
                  style={{ width: 200, height: 61 }}
                >
                  Vous etes Client ?
                </Button>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RolePage;
