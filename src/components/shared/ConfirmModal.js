import React from "react";
import Modal from "./Modal";
import ConfirmButtons from "./ConfirmButtons";

const ConfirmModal = props =>
    <Modal {...props}>
        {props.content || props.children}
        <ConfirmButtons {...props}/>
    </Modal>;

export default ConfirmModal;