import React from 'react';
import {connect} from 'react-redux';

const Footer = props => {
    if (!props.isAuthenticated) return '';

    return <footer className="App-footer">Copyright "<u>Demo Shop</u>", 2017</footer>;
};

const mapStateToProps = ({auth: {isAuthenticated}}) => ({isAuthenticated});

export default connect(mapStateToProps)(Footer);