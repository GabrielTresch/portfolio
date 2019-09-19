import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const LayoutContainer = ({ children }) => (
  <div className="App">
    <Navigation />
    <main>
      { children }
    </main>
    <Footer />
  </div>
);

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
