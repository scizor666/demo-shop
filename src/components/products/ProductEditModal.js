import React from 'react';
import Modal from "../shared/Modal";
import ArrayUtils from "../../utils/ArrayUtils";
import ConfirmButtons from "../shared/ConfirmButtons";

const ProductEditModal = props =>
        <Modal className="ProductEdit-wrapper"
            title={`Edit "${props.name}"`}
            {...props}>
            <div className="row">
                <div className="col col-xs-12 col-sm-6">
                    <div className="ProductEdit-fields">
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
                                {Object.entries(props.genders)
                                    .map(([key, name]) => <React.Fragment key={key}>
                                        <input id={`ProductEdit-size${key}`}
                                               className="DemoShop-radioInput"
                                               type="radio"
                                               name="size"
                                               value={key}/>
                                        <label htmlFor={`ProductEdit-size${key}`}
                                               className="DemoShop-radioLabel">
                                            {name}
                                        </label>
                                    </React.Fragment>)}
                            </div>
                        </div>
                        <div className="ProductEdit-descriptionWrapper">
                            <label className="ProductEdit-inputLabel">Description:</label>
                            <textarea className="DemoShop-textarea"/>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-12 col-sm-6">
                    <div className="ProductEdit-fields">
                        <div className="ProductEdit-inputGroup">
                            <label className="ProductEdit-inputLabel">Link to image:</label>
                            <input className="ProductEdit-field"
                                   placeholder="Please enter link to image..."
                                   type="url"
                                   pattern="^https?\://.+$"/>
                        </div>
                        <div className="ProductEdit-inputGroup">
                            <img className="DemoShop-image"
                                 src={props.imageUrl}/>
                        </div>
                        <div className="ProductEdit-inputGroup">
                            <label className="ProductEdit-inputLabel">Price:</label>
                            <input className="ProductEdit-field"
                                   min={1}
                                   type="number"
                                   step="any"
                                   placeholder="Please enter price..."/>
                        </div>
                        <div className="ProductEdit-inputGroup">
                            <label className="ProductEdit-inputLabel">Rating:</label>
                            <select className="ProductEdit-select">
                                {ArrayUtils.times(5, key => <option key={++key} value={key}>{key}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmButtons {...props}/>
        </Modal>;

export default ProductEditModal;