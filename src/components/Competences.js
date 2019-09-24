import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MemphisFond from '../assets/img/memphis-fond.png';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  content: {
    padding: ' 10px 18px',
    background: `url(${MemphisFond})`,
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
    marginBottom: '20px',
  },
  title: {
    position: 'relative',
    paddingLeft: '10px',
    marginBottom: '25px',
    color: 'black',
  },
  underline: {
    width: '45px',
    height: '3px',
    background: 'black',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
  },
  '@media (min-width: 1200px)': {
    wrapper: {
      maxWidth: '700px',
      margin: 'auto',
    },
  },
});

const Competences = ({
  title, competences,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>
          {title}
          <span className={classes.underline} />
        </h3>
        <div className={classes.container}>
          {competences.map((value, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className={classes.content} key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Competences.propTypes = {
  title: PropTypes.string.isRequired,
  competences: PropTypes.array.isRequired,
};


export default Competences;
