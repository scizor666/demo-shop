import React from 'react';
import ArrayUtils from "../../utils/ArrayUtils";
import ConfirmButtons from "../shared/ConfirmButtons";

const ProductForm = props => {

    const isFormValid = () => props.name && props.rating && props.description &&
        props.gender && props.image && props.cost >= 1 && props.categoryId > 0 &&
        !document.querySelector('input:invalid');

    return <form onSubmit={props.handleSubmit}>
        <div className="row">
            <div className="col col-xs-12 col-sm-6">
                <div className="ProductForm-fields">
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Name:</label>
                        <input className="ProductForm-field"
                               name="name"
                               onChange={props.handleInputChange}
                               placeholder="Please enter name..."
                               value={props.name}/>
                    </div>
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Category:</label>
                        <select className="ProductForm-select"
                                name="categoryId"
                                value={props.categoryId}
                                onChange={props.handleInputChange}>
                            {Object.entries(props.categories).map(([key, category]) =>
                                <option key={key} value={category.id}>{category.name}</option>)}
                        </select>
                    </div>
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Size:</label>
                        <div className="DemoShop-radioOptionWrapper">
                            {Object.entries(props.genders)
                                .map(([key, name]) => <React.Fragment key={key}>
                                    <input id={`ProductForm-gender_${key}`}
                                           className="DemoShop-radioInput"
                                           name="gender"
                                           onChange={props.handleInputChange}
                                           type="radio"
                                           value={name}
                                           checked={props.gender === name}/>
                                    <label htmlFor={`ProductForm-gender_${key}`}
                                           className="DemoShop-radioLabel">
                                        {name}
                                    </label>
                                </React.Fragment>)}
                        </div>
                    </div>
                    <div className="ProductForm-descriptionWrapper">
                        <label className="ProductForm-inputLabel">Description:</label>
                        <textarea className="DemoShop-textarea"
                                  name="description"
                                  onChange={props.handleInputChange}
                                  value={props.description}/>
                    </div>
                </div>
            </div>
            <div className="col col-xs-12 col-sm-6">
                <div className="ProductForm-fields">
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Link to image:</label>
                        <input className="ProductForm-field"
                               name="image"
                               onChange={props.handleInputChange}
                               placeholder="Please enter link to image..."
                               type="url"
                               pattern="^https?://.+$"
                               value={props.image}/>
                    </div>
                    <div className="ProductForm-inputGroup">
                        <img className="DemoShop-image"
                             src={props.image}/>
                    </div>
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Price:</label>
                        <input className="ProductForm-field"
                               name="cost"
                               onChange={props.handleInputChange}
                               min={1}
                               type="number"
                               step="any"
                               placeholder="Please enter price..."
                               value={props.cost}
                        />
                    </div>
                    <div className="ProductForm-inputGroup">
                        <label className="ProductForm-inputLabel">Rating:</label>
                        <select className="ProductForm-select"
                                name="rating"
                                onChange={props.handleInputChange}
                                value={props.rating}>
                            {ArrayUtils.times(5, key => <option key={++key} value={key}>{key}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <ConfirmButtons cancelAction={props.cancelAction} submitDisabled={!isFormValid()}/>
    </form>
};

export default ProductForm;