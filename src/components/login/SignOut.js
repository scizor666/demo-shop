import React, {Component} from 'react';
import './SignOut.css';

export default class SignOut extends Component {
    render() {
        return <div>
            <div className="SignOut-username">Hello, Username</div>
            {' '}
            <i className="fa fa-2x fa-sign-out" aria-hidden="true"/>
        </div>
    }
}