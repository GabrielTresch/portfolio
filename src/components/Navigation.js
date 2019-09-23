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
    height: '22px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    textDecoration: 'none',
    color: '#a3a3a3',
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    margin: 'auto',
  },
  active: {
    color: 'black',
    fontWeight: 'bold',
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
      '&:hover div': {
        transform: 'translateY(-50%)',
      },
    },
    active: {
      '&:hover div': {
        transform: 'translateY(0)',
      },
    },
    span: {
      fontWeight: 'bold',
      color: 'black',
    },
    icon: {
      display: 'none',
    },
    animMenu: {
      display: 'flex',
      flexDirection: 'column',
      transition: '0.4s',
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
        <div className={classes.animMenu}>
          <span>Accueil</span>
          <span className={classes.span}>Accueil</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/a-propos">
        <PersonIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>A propos</span>
          <span className={classes.span}>A propos</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/realisations">
        <CreateIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>Réalisations</span>
          <span className={classes.span}>Réalisations</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/contact">
        <EmailIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>Contact</span>
          <span className={classes.span}>Contact</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
