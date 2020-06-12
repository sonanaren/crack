import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { MenuItem, MenuList, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <MenuList>
          <MenuItem component={Link} to="/">
            Bikes
          </MenuItem>
          <MenuItem component={Link} to="/">
            Cars
          </MenuItem>
        </MenuList>
      </AppBar>
    </div>
  );
}
