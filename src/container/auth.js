import React, { useEffect, useState } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { getInfo } from '../api'

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        const { history } = this.props;
        console.log(axios.defaults.headers.common['atoken'], 'axios')
        getInfo().then((res) => {
            console.log(res, 'res...');
            this.setState({ token: res['data']['token'] })
            // window.location.href = "/dashboard";
            history.push('/dashboard')
        }, (err) => {
            console.log(err, 'err...')
            if (err) {
                window.location.href = "/login";
            }
        });
    }
    render() {
        console.log(this.state, '...')
        if (!this.state.token) {
            return <div></div>
        }
        return <div>{this.props.children}</div>;
    }
}
export default withRouter(Auth);
