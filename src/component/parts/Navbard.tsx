import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useNavigate } from "react-router-dom";
import Client from "../../@types/Client";
import Ouvrier from "../../@types/Ouvrier";
import Admin from "../../@types/Admin";
import { getClient } from "../../actions/Client/action";
import { getOuvrier } from "../../actions/Ouvrier/action";
import { getAdmin } from "../../actions/Admin/action";

function Navbar() {
  const [client, setClient] = React.useState<Client | null>(null);
  const [ouvrier, setOuvrier] = React.useState<Ouvrier | null>(null);
  const [admin, setAdmin] = React.useState<Admin | null>(null);

  const userId = localStorage.getItem("user_id");

  React.useEffect(() => {
    if (userId) {
      getClient(userId, setClient);
    }
  }, [userId]);

  React.useEffect(() => {
    if (userId) {
      getOuvrier(userId, setOuvrier);
    }
  }, [userId]);

  React.useEffect(() => {
    if (userId) {
      getAdmin(userId, setAdmin);
    }
  }, [userId]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: 18,
            }}
          >
            Bureau Des Services Rapide
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to={"/list"} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Liste des secteurs
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Contactez-nous
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/ouvriertable"} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Professionels
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/clienttable"} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Clients
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: 18,
            }}
          >
            BSR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/list"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: 12,
                  paddingLeft: 8,
                }}
              >
                Liste des secteurs
              </Button>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: 12,
                  paddingLeft: 8,
                }}
              >
                Contactez-nous
              </Button>
            </Link>
            <Link to={"/ouvriertable"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: 12,
                  paddingLeft: 8,
                }}
              >
                Professionels
              </Button>
            </Link>
            <Link to={"/clienttable"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: 12,
                  paddingLeft: 8,
                }}
              >
                Clients
              </Button>
            </Link>
          </Box>
          <Link
            to={"/messagepage"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={client?.coverPath || ouvrier?.coverPath}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                to={"/profil"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </Link>
              <MenuItem onClick={Logout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
