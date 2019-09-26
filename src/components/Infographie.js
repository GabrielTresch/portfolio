import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Infographie2D from './Infographie2D';

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    columns: '3 250px',
    columnGap: '1rem',
    margin: '40px auto',
  },
  img: {
    maxWidth: '380px',
    width: '100%',
    margin: '0 1rem 1rem 0',
    display: 'inline-block',
  },
  title: {
    maxWidth: '1200px',
    margin: '60px auto 0 auto',
    paddingLeft: '0',
  },
  '@media (max-width: 535px)': {
    img: {
      display: 'block',
      margin: '20px auto',
    },
    title: {
      paddingLeft: '10px',
    },
  },
});

const Infographie = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Mes infographies 2D</h1>
      <Infographie2D />
    </>
  );
};

export default Infographie;
