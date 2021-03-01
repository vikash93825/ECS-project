import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"80px auto"
  },
  homeButton: {
    marginRight: theme.spacing(3),
  },
  cartButton: {
    marginLeft: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "#8296ce" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h5"
              className={classes.homeButton}
              color="inherit"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                BookShop
              </Link>
            </Typography>
          </div>
          <div>
          
            <IconButton
              edge="start"
              className={classes.cartButton}
              color="inherit"
              aria-label="menu"
            >
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Navbar };
