import * as React from "react";
import { Layout, Menu, Dropdown, Modal } from "antd";
import axios from 'axios';
import HorizontalNav from './horizontalNav';
import styles from './index.module.less';

const { Header } = Layout;

export default function TopBar(props) {
    // const styles = useStyles(props);
    // let { formatMessage } = props.intl;
    let logOut = () => {
        Modal.info({
            title: '退出',
            children: <div>确定退出</div>,
            okText: "确定",
            cancelText: "取消",
            width: 400,
            onOk() {
                clearToken();
            },
            onCancel() { }
        });
    };

    const clearToken = () => {
        axios.defaults.headers.common["atoken"] = "";
        localStorage.setItem('token', '')
        window.location.href = "/login"
    }

    // let clearToken = () => {
    //     store.set("AUTH", "");
    //     sessionStorage.write("AUTH", "");
    //     axios.defaults.headers.common["Authorization"] = "";
    //     // props.history.push("/login");
    //     window.location.href = "/login";
    // };
    const menu = (
        <Menu
            className={styles.menu_root}
            theme="dark"
        // onClick={props.changeLocale}
        >
            <Menu.Item key="zh">
                中文
        </Menu.Item>
            <Menu.Item key="en">
                English
        </Menu.Item>
        </Menu>
    );

    let local = "中文";
    if (props.currLocal === "en") {
        local = "English";
    }
    // const logoUrl = window["config"] && window["config"].tenantLogo && window["config"].tenantLogo.generalLogoPath
    //     ? window["config"].tenantLogo.generalLogoPath : require("@assets/logo-preview.png")

    return (
        <>
            <Header className={styles.root}>
                <div className={styles.logo}>
                    {/* <img alt="logo" src={logoUrl} /> */}
                    start
                </div>
                <div className={styles.menu}>
                    <HorizontalNav />
                </div>
                <ul className={styles.act}>
                    {/* <li className={styles.lan}>
                        <Dropdown overlay={menu}>
                            <span >
                                {local}
                            </span>
                        </Dropdown>
                    </li> */}
                    <li className={styles.user}>
                        <span
                            onClick={() => {
                                // appHistory.push("/user/profile");
                            }}
                            // className="iconfont icon-user"
                            style={{ fontSize: "14px" }}
                        />
                    </li>
                    <li className={styles.btn_close} onClick={logOut}>
                        {/* <img
                            className={styles.btn_close}
                            src={require("@assets/icon-close.png")}
                            alt="close"
                        /> */}
                        退出
                    </li>
                </ul>
            </Header>
            {/* <BreadcrumbBar /> */}
        </>
    );
}