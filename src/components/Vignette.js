/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import VignettePhoto from './VignettePhoto';

const useStyles = makeStyles({
  infos: {
    padding: '20px',
  },
  infoLink: {
    fontSize: '13px',
    background: 'black',
    padding: '5px 15px',
    color: 'white',
    textDecoration: 'none',
  },
  '@media (min-width: 1200px)': {
    infos: {
      width: '45%',
    },
  },
});

const Vignette = ({
  title, description, link, photo, style,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={style}>
        <div className={classes.infos}>
          <h2>{title}</h2>
          <p>{description}</p>
          <NavLink to={link} className={classes.infoLink}>Voir plus</NavLink>
        </div>
        <VignettePhoto photo={photo} title={title} />
      </div>
    </>
  );
};

Vignette.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Vignette;
