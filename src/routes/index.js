import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';

const ROUTES = {
  LOGIN: '/login',
  REGISTERUSER: '/registerUser',
  HOME: '/home',
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTERUSER} component={RegisterUser} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
