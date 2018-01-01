import React from 'react';

const SignOut = props =>
    <div className="SignOut-wrapper">
        <span className="SignOut-username">Hello, <i>{'\u00A0'}{props.login}</i></span>
        <img onClick={props.onSignOut} id="SignOut-icon" src="/images/header-logout.svg"/>
    </div>;

export default SignOut