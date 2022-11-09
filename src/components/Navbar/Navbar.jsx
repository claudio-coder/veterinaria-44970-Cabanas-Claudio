import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo_nuevo from "./Navbar_img/logo_nuevo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const pages = [
  { label: "Inicio", link: "/" },
  { label: "Perros", link: "/raza/perros" },
  { label: "Gatos", link: "/raza/gatos" },
  { label: "Peces", link: "/raza/peces" },
  { label: "Aves", link: "/raza/aves" },
  { label: "Conejos", link: "/raza/conejos" },
  { label: "Exóticos", link: "/raza/exoticos" },
  { label: "Mi Cuenta", link: "/MiCuenta" },
  { label: "Envio Prog", link: "/EnvioProg" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(true);
  };

  return (
    <AppBar style={{ backgroundColor: "#8570ae" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo_nuevo} alt="" width={100} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              mr: 2,
              lineHeight: 0.8,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div>Centro</div>
            <div>Medico</div>
            <div>Veterinario</div>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.link}>{page.label}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h7"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              lineHeight: 0.8,

              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              flexDirection: "column",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div>Centro</div>
            <div>Medico</div>
            <div>Veterinario</div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.label} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                <Link className="titulos" to={page.link}>
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
