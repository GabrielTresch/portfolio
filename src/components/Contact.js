import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    minWidth: '300px',
    width: '100%',
    height: '35vh',
    background: 'url("https://images.unsplash.com/photo-1564932367297-3d3f350a2e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    padding: '10px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: 'black',
  },
  description: {
    color: '#8f8f8f',
  },
  '@media (min-width: 1200px)': {
    container: {
      marginTop: '50px',
      flexDirection: 'row',
      height: 'calc(100vh - 130px)',
    },
    img: {
      width: '60%',
      height: '100%',
    },
    content: {
      width: '40%',
      height: '100%',
    },
    info: {
      margin: 'auto',
      maxWidth: '500px',
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.img} />
      <div className={classes.content}>
        <div className={classes.info}>
          <h1 className={classes.title}>Me contacter</h1>
          <p className={classes.description}>
            Pour toute demande professionnelle veuillez me contacter à cette&nbsp;
            <a href="mailto:tresch.gab@gmail.com">adresse mail</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
