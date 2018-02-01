import React from "react";

const ConfirmButtons = props => <div className="ConfirmButtons-wrapper">
    <button className="DemoShop-button_bigSecondary"
            onClick={props.cancelAction}>
        {props.cancelLabel}
    </button>
    <button type="submit"
            disabled={props.submitDisabled}
            className="DemoShop-button_big">
        {props.confirmLabel}
    </button>
</div>;

ConfirmButtons.defaultProps = {
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    submitDisabled: false
};

export default ConfirmButtons;