import React from 'react';
import ConfirmModal from '../shared/ConfirmModal';

const ConfirmDeleteModal = props =>
    <ConfirmModal
        title="Are you sure?"
        cancelAction={props.cancelAction}
        confirmAction={props.confirmAction}
        className="ConfirmDeleteModal-wrapper">
        <div className="ProductDisplay-DeleteModalText">
            <span>You are trying to delete this product.</span><br/>
            <span>Are you sure you want this?</span>
        </div>
    </ConfirmModal>;

export default ConfirmDeleteModal;