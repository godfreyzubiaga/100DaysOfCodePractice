import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import PracticeHooks from '../components/PracticeHooks';
import PracticeContext from '../components/PracticeContext';
import HomePage from '../components/HomePage';
import SimpleProfile from '../components/SimpleProfile';
import Signin from '../components/SimpleProfile/Signin';

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hooks" component={PracticeHooks} />
      <Route exact path="/context" component={PracticeContext} />
      <Route exact path="/profile" component={SimpleProfile} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  </HashRouter>
);
