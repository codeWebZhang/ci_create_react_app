import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./container";
import store from "./store";


export default function Root(props) {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" render={(props) => <App {...props} />} />
                </Switch>
            </Router>
        </Provider>
    );
}