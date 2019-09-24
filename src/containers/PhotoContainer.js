import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Titles from '../config/Titles';
import Photo from '../components/Photo';

const useStyles = makeStyles({
  title: {
    maxWidth: '1200px',
    margin: '60px auto 0 auto',
    paddingLeft: '0',
  },
  '@media (max-width: 535px)': {
    title: {
      paddingLeft: '10px',
    },
  },
});

const PhotoContainer = () => {
  const classes = useStyles();
  return (
    <>
      <Titles title="Photographie" />
      <h1 className={classes.title}>Mes photos</h1>
      <Photo />
    </>
  );
};

export default PhotoContainer;
