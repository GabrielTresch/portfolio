import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import About from '../containers/AboutContainer';
import Realisation from '../containers/RealisationContainer';
import Contact from '../containers/ContactContainer';
import Infographie from '../containers/InfographieContainer';
import Photo from '../containers/PhotoContainer';
import Travel from '../containers/TravelContainer';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/a-propos" component={About} />
    <Route exact path="/realisations" component={Realisation} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/infographie" component={Infographie} />
    <Route exact path="/photo" component={Photo} />
    <Route exact path="/travel" component={Travel} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
