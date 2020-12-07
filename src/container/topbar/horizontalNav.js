import * as React from "react";
import { config } from "../../config";
import { Menu } from "antd";
import _ from "lodash";
// import { appHistory } from "@utils/stark";
// import { connect } from "react-redux";
// import { filterMenu } from "@utils/index";
import { useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import styles from './horizon.module.less';

let { menu } = config;

export default function HorizontalNav(props) {
    const history = useHistory();
    // let jsonc = JSON.parse(
    //     JSON.stringify(props.user ? props.user.permissionList : [])
    // );
    // menu = filterMenu(jsonc, menu);
    // let { formatMessage } = props.intl;

    // const { pathname } = useModel("router");
    // const styles = useStyles(props);
    // const xselectedKeys = pathname.substr(1).split("/");
    let location = useLocation();
    const xselectedKeys = location.pathname.substr(1).split("/");
    let selectedKeys = [_.slice(xselectedKeys, 0, 2).join("/")];
    selectedKeys.push(xselectedKeys[0]);
    let renderChildren = (children) => {
        return _.map(children, (item) => {
            return (
                <Menu.Item
                    key={item.key}
                    className={styles.submenuBg}
                    onClick={() => {
                        history.push(`/${item.key}`);
                    }}
                >
                    <span>
                        {item.key}
                    </span>
                </Menu.Item>
            );
        });
    };
    let renderSubmenuName = (key) => {
        return (
            <div >{key}</div>
        );
    };
    let renderItems = (selectedKeys) => {
        let items = [];
        for (let index = 0; index < menu.length; index++) {
            const item = menu[index];
            if (_.has(item, "children")) {
                let cls;
                if (index === 0) {
                    cls = classNames(styles.submenu, styles.noLeft);
                } else if (index === menu.length - 1) {
                    cls = classNames(styles.submenu, styles.noRight);
                } else {
                    cls = classNames(styles.submenu);
                }
                items.push(
                    <Menu.SubMenu
                        key={item.key}
                        className={cls}
                        title={renderSubmenuName(item.key)}
                    >
                        {renderChildren(item.children)}
                    </Menu.SubMenu>
                );
            } else {
                let cls;
                if (index === 0) {
                    cls = classNames(styles.menu_item, styles.noLeft);
                } else if (index === menu.length - 1) {
                    cls = classNames(styles.menu_item, styles.noRight);
                } else {
                    cls = classNames(styles.menu_item);
                }
                items.push(
                    <Menu.Item
                        className={cls}
                        key={item.key}
                        onClick={() => {
                            history.push(`/${item.key}`);
                        }}
                    >
                        {item.key}
                    </Menu.Item>
                );
            }
        }
        return items;
    };

    return (
        <Menu
            selectedKeys={selectedKeys}
            // openKeys={selectedKeys}
            selectable={true}
            mode="horizontal"
            theme="dark"
            className={styles.root}
        >
            {renderItems(selectedKeys)}
        </Menu>
    );
}