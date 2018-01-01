import React from 'react';
import {connect} from 'react-redux';
import {signout} from '../../actions';

const SignOut = props =>
    <div className="SignOut-wrapper">
        <span className="SignOut-username">Hello, <i>{'\u00A0'}{props.login}</i></span>
        <img onClick={props.signout} id="SignOut-icon" src="/images/header-logout.svg"/>
    </div>;

const mapStateToProps = ({auth: {login}}) => ({login});

export default connect(mapStateToProps, {signout})(SignOut);