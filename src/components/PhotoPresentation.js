import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Photo from '../assets/img/gabriel.png';
import Background from '../assets/img/gabriel_background.svg';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '50%',
    minWidth: '250px',
    maxWidth: '450px',
    margin: 'auto',
  },
  svg: {
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: '-1',
  },
  photo: {
    width: '100%',
  },
  '@media (min-width: 1200px)': {
    container: {
      marginRight: '100px',
    },
  },
});

const PhotoPresentation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={Background} className={classes.svg} alt="background svg" />
      <img src={Photo} className={classes.photo} alt="gabriel tresch" />
    </div>
  );
};

export default PhotoPresentation;
