import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header/index';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';

const ROUTES = {
  LOGIN: '/login',
  REGISTERUSER: '/registerUser',
  HOME: '/home',
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      //Add a token validation
      localStorage.getItem('token') ? (
        <Header>
          <Component {...props} />
        </Header>
      ) : (
        <Redirect to={{ pathname: ROUTES.LOGIN }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTERUSER} component={RegisterUser} />
        <PrivateRoute path={ROUTES.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
