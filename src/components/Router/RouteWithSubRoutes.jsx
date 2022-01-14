import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouteWithSubRoutes = ({ path, exact, routes, redirect, component: Component }) => {
  return (
    <Route
      key={path}
      path={path}
      exact={exact}
      render={(props) => {
        return redirect ? <Redirect to={redirect} /> : <Component routes={routes} {...props} />;
      }}
    />
  );
};

export default RouteWithSubRoutes;
