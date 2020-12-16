import * as React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import TopBar from './topbar';
import Body from './../route';

const { Content } = Layout;

export default function stack(props) {
    return (
        <div>{props.children}</div>
    );
}