import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Realisation from '../components/Realisation';

const useStyles = makeStyles({
  realisations: {
    marginTop: '100px',
  },
  '@media (max-width: 660px)': {
    realisations: {
      marginTop: '50px',
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
