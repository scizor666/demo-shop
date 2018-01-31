import React from "react";
import Modal from "./Modal";
import ConfirmButtons from "./ConfirmButtons";

const ConfirmModal = props =>
    <Modal {...props}>
        <form onSubmit={props.confirmAction}>
            {props.content || props.children}
            <ConfirmButtons {...props}/>
        </form>
    </Modal>;

export default ConfirmModal;