import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import List from './list';
import Batch from './batch';
import Group from './gruop';

export default function Device() {
    const match = useRouteMatch();
    console.log(match, 'match...')
    return (
        <div>
            <Switch>
                <Route exact={true} path={`${match.url}`} component={List} />
                <Route path={`${match.url}/list`} component={List} />
                <Route path={`${match.url}/batch`} component={Batch} />
                <Route path={`${match.url}/group`} component={Group} />
            </Switch>
        </div>
    );
}