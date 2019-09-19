import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcons from './LinkIcons';

const useStyles = makeStyles({
  footer: {
    background: 'black',
    padding: '20px 0',
    color: 'white',
    marginTop: '20px',
    marginBottom: '50px',
  },
  legals: {
    textAlign: 'center',
    marginBottom: '0',
  },
  '@media (min-width: 1200px)': {
    footer: {
      marginBottom: '0',
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <LinkIcons color="white" />
      <p className={classes.legals}>© Gabriel Tresch - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
