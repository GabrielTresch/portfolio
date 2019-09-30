import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const baseUrl = require.context('../assets/img', true);

const useStyles = makeStyles({
  imgVignetteHome: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

const Image = ({
  src, srcset, alt, classe,
}) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <picture>
      <source type="image/webp" srcSet={baseUrl(`./${srcset}`)} className={`$.${classe}`} />
      <img src={baseUrl(`./${src}`)} alt={alt} className={`classes.${classe}`} />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
};


export default Image;
