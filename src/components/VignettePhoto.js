import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MemphisFond from '../assets/img/memphis-fond.png';

const useStyles = makeStyles({
  vignette: {
    width: '280px',
    height: '150px',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100px',
    background: `url(${MemphisFond})`,
    margin: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '200px',
    height: '100%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    // transform: 'translateX(-100%)',
    position: 'absolute',
  },
  slide1: {
    transition: '1s',
    background: '#673ab7',
  },
  slide2: {
    transitionDelay: '0.3s',
  },
  '@media (min-width: 1200px)': {
    vignette: {
      width: '45%',
      height: '250px',
    },
    content: {
      width: '400px',
    },
    background: {
      height: '200px',
    },
  },
});

const VignettePhoto = ({
  photo, title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.vignette}>
      <div className={classes.background} />
      <div className={classes.content}>
        <img src={photo} alt={title} className={[classes.img, classes.slide2].join(' ')} />
        {/* <div className={[classes.img, classes.slide1].join(' ')} /> */}
      </div>
    </div>
  );
};

VignettePhoto.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VignettePhoto;
