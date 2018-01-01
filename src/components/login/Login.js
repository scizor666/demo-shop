import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";
import {login} from "../../actions";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    onUserInput = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
    };

    render() {
        if (this.props.isAuthenticated) return <Redirect to="/main"/>;

        return <Modal className="Login-wrapper" title='Login to "Demo Shop"'>
            <LoginForm login={this.state.login}
                       password={this.state.password}
                       error={this.props.error}
                       handleSubmit={this.handleSubmit}
                       onUserInput={this.onUserInput}
            />
        </Modal>;
    }
}

const mapStateToProps = ({auth: {isAuthenticated, error}}) => ({isAuthenticated, error});

export default connect(mapStateToProps, {login})(Login);