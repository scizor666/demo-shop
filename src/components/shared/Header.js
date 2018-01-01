import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SignOut from '../login/SignOut'

const Header = props => {
    if (!props.isAuthenticated) return '';

    return <header className="App-header">
        <Link to='/'><img id="App-logo" src="/images/logo.svg"/></Link>
        <SignOut/>
    </header>
};


const mapStateToProps = ({auth: {isAuthenticated}}) => ({isAuthenticated});

export default connect(mapStateToProps)(Header);