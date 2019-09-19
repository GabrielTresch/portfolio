import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  nav: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    bottom: 0,
    left: '0',
    display: 'flex',
    background: 'white',
    boxShadow: '0px 2px 10px rgba(0,0,0,.5)',
    zIndex: '10',
  },
  firstNavlink: {
    display: 'none',
  },
  navlink: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    textDecoration: 'none',
    color: 'black',
  },
  icon: {
    margin: 'auto',
  },
  active: {
    color: 'red',
  },
  '@media (min-width: 1200px)': {
    nav: {
      position: 'initial',
      height: '70px',
      boxShadow: 'none',
      background: 'transparent',
      paddingTop: '20px',
      zIndex: '1',
      alignItems: 'center',
    },
    firstNavlink: {
      background: 'black',
      color: 'white',
      padding: '5px 20px',
      borderRadius: '20px',
      display: 'block',
      marginRight: 'auto',
      marginLeft: '3vw',
      textDecoration: 'none',
      fontSize: '16px',
    },
    navlink: {
      fontSize: '16px',
      margin: '0',
      marginRight: '6vw',
    },
    icon: {
      display: 'none',
    },
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <NavLink className={classes.firstNavlink} to="/">Gabriel Tresch</NavLink>
      <NavLink className={classes.navlink} exact activeClassName={classes.active} to="/">
        <HomeIcon className={classes.icon} />
        Accueil
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/a-propos">
        <PersonIcon className={classes.icon} />
        A propos
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/realisations">
        <CreateIcon className={classes.icon} />
        Réalisations
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/contact">
        <EmailIcon className={classes.icon} />
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
