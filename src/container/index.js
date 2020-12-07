import * as React from "react";
import { Layout } from "antd";
import TopBar from './topbar';
import Body from './../route';

const { Content } = Layout;

export default function stack() {
    return (
        <Layout>
            <TopBar />
            <div>
                <Content>
                    <Body />
                </Content>
            </div>
        </Layout>
    );
}