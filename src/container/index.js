import * as React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import TopBar from './topbar';
import Body from './../route';
import MainApp from './mainApp';
import Stack from './root';
import Login from './login';
import Auth from './auth';

const { Content } = Layout;

export default function stack() {
    return (
        <Switch>
            <Route exact={true} path="/login" component={Login} />
            {/* <Route exact={true} path="/resetPassword" component={ResetPassword} /> */}
            <Auth>
                <MainApp>
                    <Stack />
                </MainApp>
            </Auth>
        </Switch>
    );
}