import React from "react";

const ConfirmButtons = (props) => <div className="ConfirmButtons-wrapper">
    <button className="DemoShop-button_bigSecondary"
            onClick={props.cancelAction}>
        {props.cancelLabel}
    </button>
    <button className="DemoShop-button_big"
            onClick={props.confirmAction}>
        {props.confirmLabel}
    </button>
</div>;

ConfirmButtons.defaultProps = {
    confirmLabel: "Confirm",
    cancelLabel: "Cancel"
};

export default ConfirmButtons;