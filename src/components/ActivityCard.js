/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import '../assets/scss/style.scss';

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
    width: '100%',
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
    transform: 'translate(-50%, -50%)',
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

  return (
    <>
      <div className={`${classes.card} uiCard`}>
        <div className={classes.imgContainer}>
          <div className={classes.slider}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              className="presentation-mode"
              autoPlay
              interval={2000}
              infiniteLoop
            >
              <div>
                <img className={classes.slide} src={img1} alt="img" />
              </div>
              <div>
                <img className={classes.slide} src={img2} alt="img" />
              </div>
              <div>
                <img className={classes.slide} src={img3} alt="img" />
              </div>
            </Carousel>
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
