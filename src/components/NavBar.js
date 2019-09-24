import React from 'react';
//import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useAuth0 } from "../react-auth0-wrapper";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "black"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "darkgrey",
    color: "black"
  },
  drawerHeader: {
    display: "flex",

    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
    function toggleDrawer(booleanValue) {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }
  
    return (
      <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            align="center"
            className={classes.title}
            style={{ color: "black" }}
          >
            AM's Audio Playlist
          </Typography>
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}

          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ color: `black` }}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <List>
          <ListItem>
            <Link className="Link" to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
          <Link className='Link' to="/electronics">Electronic Playlist</Link>
          </ListItem>
          <ListItem>
          <Link className='Link' to="/audiobooks">AudioBook Playlist</Link>
          </ListItem>
          <ListItem>
          <Link className='Link' to="/audiobookplayer">AudioBook Player</Link>
          </ListItem>
          <ListItem>
          <Link className='Link' to="/playlist">Music List</Link>
          </ListItem>
          <ListItem>
          <Link className='Link' to="/audiobookplaylist">AudioBook List</Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
/*
<ul >
          <li>
            <Link className='Link' to="/">Home</Link>
          </li>
          <li>
            <Link className='Link' to="/electronics">Electronic Playlist</Link>
          </li>
          <li>
            <Link className='Link' to="/audiobooks">AudioBook Playlist</Link>
          </li>
          <li>
          <Link className='Link' to="/audiobookplayer">AudioBook Player</Link>
          </li>
          <li>
          <Link className='Link' to="/playlist">Music List</Link>
          </li>
          <li>
          <Link className='Link' to="/audiobookplaylist">AudioBook List</Link>
          </li>
        </ul>
         {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}

          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
*/