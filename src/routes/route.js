import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function RouteWrapper({
  component,
  isPrivate,
  ...rest
}) {
  const token = localStorage.getItem('token')

  if (!token && isPrivate) {
    return <Redirect to="/" />;
  }

  if (token && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Component = component

  return (
    <Route
        {...rest}
        render={(props) => (
          <Component {...props} />
        )}
      />
  );
}
