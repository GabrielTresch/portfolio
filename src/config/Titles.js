import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Titles = ({ title }) => {
  const defaultTitle = 'Portfolio - Gabriel Tresch';
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Titles;
