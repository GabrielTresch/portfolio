import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
  },
  title: {
    margin: 'auto',
  },
});

const Travel = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>En cours de développement</h1>
    </div>
  );
};

export default Travel;
