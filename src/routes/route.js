import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function RouteWrapper({
  component,
  isPrivate,
  ...rest
}) {
  const signed = localStorage.getItem('isAuthenticated')

  if ((signed === "false" || !signed) && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed === "true" && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Component = component

  return (
    (signed === 'false' || !signed) ?
      <Route
        {...rest}
        render={(props) => (
          <Component {...props} />
        )}
      /> : <Route
        {...rest}
        render={(props) => (
          <Component {...props} />
        )}
      />
  );
}
