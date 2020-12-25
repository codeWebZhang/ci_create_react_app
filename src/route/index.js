import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Dashboard from './dashboard';
import Product from './product';
import Device from './device';
import Profile from './profile';

export default function Content() {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact={true} path={`${match.url}`} component={Dashboard} />
                <Route path={`${match.url}dashboard`} component={Dashboard} />
                <Route path={`${match.url}product`} component={Product} />
                <Route path={`${match.url}device`} component={Device} />
                <Route path={`${match.url}profile`} component={Profile} />
            </Switch>
        </div>
    );
}