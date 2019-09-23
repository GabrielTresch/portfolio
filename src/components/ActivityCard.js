/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth: '250px',
    maxWidth: '320px',
    height: '360px',
    background: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
    margin: 'auto 40px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
  },
  imgContainer: {
    position: 'relative',
    height: '60%',
  },
  slider: {
    minWidth: '230px',
    height: '130px',
    borderRadius: '20px',
    position: 'absolute',
    top: '30px',
    left: '-40px',
    overflow: 'hidden',
  },
  slide: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'none',
    borderRadius: '20px',
    transform: 'translate(-50%, -50%)',
  },
  showSlide: {
    display: 'block',
  },
  switchSlide: {
    width: '10px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  switch: {
    width: '10px',
    height: '10px',
    background: 'black',
    borderRadius: '100%',
    marginTop: '5px',
    transition: '0.4s',
    cursor: 'pointer',
    outline: 'none',
  },
  switchActive: {
    height: '30px',
    borderRadius: '12px',
  },
  description: {
    padding: '20px',
  },
  title: {
    fontWeight: 'bold',
  },
  link: {
    width: '130px',
    background: 'black',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '15px',
    display: 'block',
    margin: '15px auto 0 auto',
    textAlign: 'center',
    textDecoration: 'none',
  },
  '@media (min-width: 1200px)': {
    card: {
      width: '320px',
      height: '430px',
      margin: 'auto',
    },
    slider: {
      width: '300px',
      height: '200px',
    },
  },
});

const ActivityCard = ({
  img1, img2, img3, title, description, link,
}) => {
  const classes = useStyles();
  const [enabled, setEnabled] = useState(false);

  const toggle = (e) => {
    console.log(e.target);
    setEnabled(!enabled);
  };

  const memoizedHandleClick = useCallback(
    () => {
      console.log('Click happened');
      setEnabled(!enabled);
    },
    [enabled], // Tells React to memoize regardless of arguments.
  );

  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <div className={classes.slider}>
            <img className={[classes.slide, classes.showSlide].join(' ')} src={img1} alt="slide1" />
            <img className={classes.slide} src={img2} alt="slide2" />
            <img className={classes.slide} src={img3} alt="slide3" />
          </div>
          <div className={classes.switchSlide}>
            <div className={`${classes.switch} ${enabled ? classes.switchActive : ''}`} onClick={memoizedHandleClick} onKeyPress={toggle} role="button" tabIndex="0" label="slider switch" />
            <div className={`${classes.switch} ${enabled ? classes.switchActive : ''}`} onClick={memoizedHandleClick} onKeyPress={toggle} role="button" tabIndex="0" label="slider switch" />
            <div className={`${classes.switch} ${enabled ? classes.switchActive : ''}`} onClick={toggle} onKeyPress={toggle} role="button" tabIndex="0" label="slider switch" />
          </div>
        </div>
        <div className={classes.description}>
          <h3 className={classes.title}>{title}</h3>
          <p>{description}</p>
          <NavLink className={classes.link} to={link}>Voir plus</NavLink>
        </div>
      </div>
    </>
  );
};

ActivityCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ActivityCard;
