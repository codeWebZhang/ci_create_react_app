import * as React from "react";
import { Layout } from "antd";
import TopBar from './topbar';
import Body from './../route';

import styles from './root.module.less';

const { Content } = Layout;

export default function stack() {
    return (
        <Layout>
            <TopBar />
            <div className={styles.root}>
                <Content>
                    <Body />
                </Content>
            </div>
        </Layout>
    );
}