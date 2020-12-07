import * as React from "react";
import { Layout, Menu, Dropdown } from "antd";
import HorizontalNav from './horizontalNav';
import styles from './index.module.less';

const { Header } = Layout;

export default function TopBar(props) {
    // const styles = useStyles(props);
    // let { formatMessage } = props.intl;
    // let logOut = () => {
    //     Modal.info({
    //         title: formatMessage(commonMsg["stack.logoutTitle"]),
    //         children: <div>{formatMessage(commonMsg["stack.logoutMessage"])}</div>,
    //         okText: formatMessage(commonMsg["stack.logoutOk"]),
    //         cancelText: formatMessage(commonMsg["stack.logoutCancel"]),
    //         width: 400,
    //         onOk() {
    //             clearToken();
    //         },
    //         onCancel() { }
    //     });
    // };

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
            <Header style={{ display: "flex" }} className={styles.root}>
                <div className={styles.logo}>
                    {/* <img alt="logo" src={logoUrl} /> */}
                    start
                </div>
                <div className={styles.menu}>
                    <HorizontalNav />
                </div>
                <ul style={{ listStyle: "none", display: "flex", alignItems: "center", color: "white", height: "100%" }}>
                    <li className={styles.lan}>
                        <Dropdown overlay={menu}>
                            <span >
                                {local}
                            </span>
                        </Dropdown>
                    </li>
                    <li className={styles.user}>
                        <span
                            onClick={() => {
                                // appHistory.push("/user/profile");
                            }}
                            // className="iconfont icon-user"
                            style={{ fontSize: "14px" }}
                        />
                    </li>
                    <li>
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