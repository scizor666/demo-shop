import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";

const Login = () =>
    <Modal title='Login to "Demo Shop"' show={true}>
        <LoginForm/>
    </Modal>;

export default Login;