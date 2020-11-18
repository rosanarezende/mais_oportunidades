import React from "react";
import { Route } from "react-router-dom";
import { isLogin } from "../providers/authentication";
// import Login from '../containers/Login/Login';

const PrivateRoute = ({
  component: Component,
  routeParameters,
  key,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} routeParameters={routeParameters} key={key} />
        ) : (
          // <Login />
          <div></div>
        )
      }
    />
  );
};

export default PrivateRoute;
