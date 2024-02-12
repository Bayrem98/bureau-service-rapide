import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  Sheet,
  Typography,
} from "@mui/joy";

const Developeur = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Les Dévéloppeurs</h3>
      <div
        className="d-flex justifiy-content-between"
        style={{ marginTop: 20, marginLeft: 80, marginBottom: 250 }}
      >
        <Box
          sx={{
            width: 252,
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <Card
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              overflow: "auto",
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img
                src="/image/avatar/ryan.jpg"
                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="."
              />
            </AspectRatio>
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                Boubakri Malek
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Ingénieur Cyber Sécurite
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
                sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
              >
                <Button variant="outlined" color="neutral">
                  Message
                </Button>
                <Button variant="solid" color="primary">
                  Appeler
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: 252,
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <Card
            style={{ marginLeft: 20 }}
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              overflow: "auto",
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt="."
              />
            </AspectRatio>
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                Sayeh Bayrem
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Senior Developpeur
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
                  <Typography fontWeight="lg">234</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Travail
                  </Typography>
                  <Typography fontWeight="lg">80</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Avis
                  </Typography>
                  <Typography fontWeight="lg">8.9</Typography>
                </div>
              </Sheet>
              <Box
                sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
              >
                <Button variant="outlined" color="neutral">
                  Message
                </Button>
                <Button variant="solid" color="primary">
                  Appeler
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Developeur;
