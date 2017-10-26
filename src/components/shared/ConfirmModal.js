import React from "react";
import './ConfirmModal.css';
import Modal from "./Modal";

const ConfirmModal = props => {

    return <Modal {...props}>
        {props.content || props.children}
        <div className="ConfirmModal-buttonGroup">
            <button className="DemoShop-button_secondary"
                    onClick={props.cancelAction}>
                {props.cancelLabel}
            </button>
            <button className="DemoShop-button"
                    onClick={props.confirmAction}>
                {props.confirmLabel}
            </button>
        </div>
    </Modal>
};

ConfirmModal.defaultProps = {
    confirmLabel: "Confirm",
    cancelLabel: "Cancel"
};

export default ConfirmModal;