import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  MenuItem,
  MenuList,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../pngkit_vector-art-png_2347278.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    width: "50px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} alt="Logo" className={classes.logo} />
          </IconButton>
        </Toolbar>

        <MenuList className={classes.title}>
          <MenuItem component={Link} to="/">
            Bikes
          </MenuItem>
          <MenuItem component={Link} to="/cars">
            Cars
          </MenuItem>
          <MenuItem component={Link} to="/login">
            Login
          </MenuItem>
        </MenuList>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
