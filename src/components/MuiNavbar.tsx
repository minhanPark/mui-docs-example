import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

export const MuiNavBar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  console.log({ anchor });
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button
            color="inherit"
            id="resource-button"
            onClick={handleClick}
            aria-controls={open ? "resource-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resource
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resource-menu"
          anchorEl={anchor}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resource-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcase</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
