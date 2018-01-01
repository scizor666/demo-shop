import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default ComposedComponent => {

    const Authentication = props => {

        if (!props.isAuthenticated) return <Redirect to="/login"/>;

        return <ComposedComponent {...props} />
    };

    const mapStateToProps = ({auth: {isAuthenticated}}) => ({isAuthenticated});

    return connect(mapStateToProps)(Authentication);
}