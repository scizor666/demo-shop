import React from 'react';
import Modal from '../shared/Modal';
import LoginForm from "./LoginForm";

const LoginModal = () =>
    <Modal title='Login to "Demo Shop"'>
        <LoginForm/>
    </Modal>;

export default LoginModal;