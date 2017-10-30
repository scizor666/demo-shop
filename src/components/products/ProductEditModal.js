import React from 'react';
import ConfirmModal from "../shared/ConfirmModal";
import {Col, Row} from "react-flexbox-grid";
import ArrayUtils from "../../utils/ArrayUtils";
import './ProductEditModal.css';

const ProductEditModal = props =>
    <ConfirmModal
        title={`Edit "${props.name}"`}
        {...props}>
        <Row>
            <Col sm={6}>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Name:</label>
                    <input className="ProductEdit-field"
                           placeholder="Please enter name..."/>
                </div>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Category:</label>
                    <select className="ProductEdit-select">
                        {Object.entries(props.categories)
                            .map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                    </select>
                </div>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Size:</label>
                    <div className="DemoShop-radioOptionWrapper">
                        {Object.entries(props.sizes)
                            .map(([key, name]) => <label key={key}>
                                <input id={`ProductEdit-size${key}`}
                                       className="DemoShop-radioInput"
                                       type="radio"
                                       name="size"
                                       value={key}/>
                                <label htmlFor={`ProductEdit-size${key}`}
                                       className="DemoShop-radioLabel">
                                    {name}
                                </label>
                            </label>)}
                    </div>
                </div>
            </Col>
            <Col sm={6}>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Link to image:</label>
                    <input className="ProductEdit-field"
                           placeholder="Please enter link to image..."/>
                </div>
                <div className="ProductEdit-inputGroup">
                    <img className="DemoShop-image"
                         src={props.imageUrl}/>
                </div>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Price:</label>
                    <input className="ProductEdit-field"
                           placeholder="Please enter price..."/>
                </div>
                <div className="ProductEdit-inputGroup">
                    <label className="ProductEdit-inputLabel">Rating:</label>
                    <select className="ProductEdit-select">
                        {ArrayUtils.times(5, key => <option key={++key} value={key}>{key}</option>)}
                    </select>
                </div>
            </Col>
        </Row>
    </ConfirmModal>;

export default ProductEditModal;