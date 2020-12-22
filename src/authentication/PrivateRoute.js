import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../providers/authentication";
import { routes } from "../routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const getRedirectProps = (location) => ({
    pathname: routes.login,
    from: location,
  });
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={getRedirectProps(props.location)} />
        );
      }}
    />
  );
};

export default PrivateRoute;
