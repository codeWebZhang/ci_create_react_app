import * as React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import Icon from '@ant-design/icons';
import axios from "axios";
import styles from './index.module.less';
import { login } from '../../api';
import { useHistory } from 'react-router-dom';

export default function LoginForm(props) {
    const history = useHistory();
    const onchange = (e) => { }
    const handleSubmit = () => { }
    const onFinish = (values) => {
        login(values).then((res) => {
            const { data } = res;
            let token = data['token'];
            if (token) {
                localStorage.setItem("token", token);
                axios.defaults.headers.common["atoken"] =
                    token;
                history.push("/dashboard")
            }
        });
    }
    return (
        <div className={styles.parent}>
            <Form onSubmit={handleSubmit}
                className={styles.root}
                onFinish={onFinish}
            >
                <div>
                    <div
                        className={styles.banner}
                    >
                        <span>登录</span>
                    </div>
                    {/* {showError ?
                    (<p className={classes.error}>{errorMsg}</p>) : null} */}
                    <Form.Item
                        className={styles.formItem}
                        name="name"
                    >
                        <Input
                            maxLength={32}
                            className={styles.input}
                            borderRadius="4px"
                            prefix={<Icon type="user" style={{ color: "#D8D8D8" }} />}
                            placeholder={'账号'}
                            autoFocus={true}
                            name="name"
                            onChange={onchange}
                        />
                    </Form.Item>
                    <Form.Item
                        className={styles.formItem}
                        name="pws"
                    >
                        <Input
                            maxLength={20}
                            className={styles.input}
                            borderRadius="4px"
                            prefix={<Icon type="lock" style={{ color: "#D8D8D8" }} />}
                            placeholder={'密码'}
                            name="pws"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            size="default"
                            type="primary"
                            htmlType="submit"
                            className={styles.button}
                        >
                            登录
                    </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}
