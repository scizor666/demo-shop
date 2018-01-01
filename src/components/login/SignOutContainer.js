import React from 'react';
import {connect} from 'react-redux';
import SignOut from './SignOut';
import {signout} from '../../actions';

class SignOutContainer extends React.Component {

    render() {
        return <SignOut login={this.props.login} onSignOut={() => this.props.signout()}/>;
    }
}

const mapStateToProps = ({auth: {login}}) => ({login});

export default connect(mapStateToProps, {signout})(SignOutContainer);