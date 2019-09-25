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
  },
  icon: {
    margin: 'auto',
  },
  active: {
    color: 'black',
    fontWeight: 'bold',
    '& > span:first-child': {
      transform: 'translate(-50%, 30%)',
    },
  },
  activeMobile: {
    width: '7.5px',
    height: '7.5px',
    background: 'black',
    borderRadius: '100%',
    zIndex: '-1',
    transition: '0.2s',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, 200%)',
  },
  animMenu: {
    display: 'none',
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
      overflow: 'hidden',
      position: 'relative',
      '&:hover div': {
        transform: 'translateY(-50%)',
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
    activeMobile: {
      width: '0%',
      height: '2px',
      borderRadius: '0',
      top: 'initial',
      left: 'initial',
      bottom: '0',
      transform: 'translate(0, 0)',
    },
    active: {
      '&:hover div': {
        transform: 'translateY(0)',
      },
      '& > span:first-child': {
        width: '100%',
        transform: 'translate(50%, 0)',
        transitionDelay: '0.4s',
      },
    },
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <NavLink className={classes.firstNavlink} to="/">Gabriel Tresch</NavLink>
      <NavLink className={classes.navlink} exact activeClassName={classes.active} to="/">
        <span className={classes.activeMobile} />
        <HomeIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>Accueil</span>
          <span className={classes.span}>Accueil</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/a-propos">
        <span className={classes.activeMobile} />
        <PersonIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>A propos</span>
          <span className={classes.span}>A propos</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/realisations">
        <span className={classes.activeMobile} />
        <CreateIcon className={classes.icon} />
        <div className={classes.animMenu}>
          <span>Réalisations</span>
          <span className={classes.span}>Réalisations</span>
        </div>
      </NavLink>
      <NavLink className={classes.navlink} activeClassName={classes.active} to="/contact">
        <span className={classes.activeMobile} />
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
