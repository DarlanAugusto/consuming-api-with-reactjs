import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function PrivateRoute({
  component: Component,
  isClosed,
  ...rest
}) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    toast.info('É necessário fazer o login!', {
      pauseOnHover: false,
      theme: 'dark',
      closeButton: false,
      position: 'top-center',
    });
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
