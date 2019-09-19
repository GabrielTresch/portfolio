import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Realisation from '../components/Realisation';

const useStyles = makeStyles({
  realisations: {
    height: '120vh',
  },
  '@media (max-width: 660px)': {
    realisations: {
      background: 'red',
      height: 'initial',
    },
  },
});

const RealisationContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.realisations}>
      <Realisation />
    </div>
  );
};

export default RealisationContainer;
