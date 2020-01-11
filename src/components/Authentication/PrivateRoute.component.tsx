import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface IPrivateRoute {
    component: Component

}

export const PrivateRoute = ({ component, ...rest } : IPrivateRoute) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);