import React from "react";
import ReactDOM from 'react-dom';
import './ProductDisplay.css';
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import DataUtils from "../../utils/DataUtils";
import {Col, Grid, Row} from "react-flexbox-grid";
import Modal from "../shared/Modal";
import ConfirmModal from "../shared/ConfirmModal";
import ArrayUtils from "../../utils/ArrayUtils";

const ProductDisplay = props => {

    const renderNotAvailable = () => <b> (<span className="ProductDisplay-notAvailable">not available</span>)</b>;

    const renderOrderButton = () => <button className="DemoShop-button" onClick={handleOrder}>Order</button>;

    const handleOrder = () => {
        const wrapper = document.body.appendChild(document.createElement('div'));
        const handleContinue = () => ReactDOM.unmountComponentAtNode(wrapper);
        ReactDOM.render(<Modal title="Thank you!">
            <div className="ProductDisplay-modalContent">
                <span>The item was added to your order.</span>
                <button className="DemoShop-button ProductDisplay-orderModalButton"
                        onClick={handleContinue}>Continue order
                </button>
            </div>
        </Modal>, wrapper);
    };

    const renderDaysLeft = amount => <span>{` (${amount} day${amount === 1 ? "" : "s"} left)`}</span>;

    const handleMakeUnavailable = () => {
        const wrapper = document.body.appendChild(document.createElement('div'));
        const handleClickFromModal = () => ReactDOM.unmountComponentAtNode(wrapper);
        ReactDOM.render(<ConfirmModal
            title="Thank you!"
            cancelAction={handleClickFromModal}
            confirmAction={handleClickFromModal}>
            <div className="ProductDisplay-modalContent">
                <span>You're trying to remove current item from the order.</span>
                {' '}
                <div>Are you sure you want this?</div>
            </div>
        </ConfirmModal>, wrapper);
    };

    const handleEditDetails = () => {
        const wrapper = document.body.appendChild(document.createElement('div'));
        const handleClickFromModal = () => ReactDOM.unmountComponentAtNode(wrapper);
        ReactDOM.render(<ConfirmModal
            title={`Edit "${props.name}"`}
            cancelAction={handleClickFromModal}
            confirmAction={handleClickFromModal}>
            <Row>
                <Col sm={6}>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Name:</label>
                        <input className="ProductDisplay-field"
                               placeholder="Please enter name..."/>
                    </div>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Category:</label>
                        <select className="ProductDisplay-select">
                            {Object.entries(props.categories)
                                .map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                        </select>
                    </div>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Size:</label>
                        <div className="DemoShop-radioOptionWrapper">
                            {Object.entries(props.sizes)
                                .map(([key, name]) => <label key={key}>
                                    <input id={`ProductDisplay-size${key}`}
                                           className="DemoShop-radioInput"
                                           type="radio"
                                           name="size"
                                           value={key}/>
                                    <label htmlFor={`ProductDisplay-size${key}`}
                                           className="DemoShop-radioLabel">
                                        {name}
                                    </label>
                                </label>)}
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Link to image:</label>
                        <input className="ProductDisplay-field"
                               placeholder="Please enter link to image..."/>
                    </div>
                    <div className="ProductDisplay-inputGroup">
                        <img className="DemoShop-image"
                             src={props.imageUrl}/>
                    </div>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Price:</label>
                        <input className="ProductDisplay-field"
                               placeholder="Please enter price..."/>
                    </div>
                    <div className="ProductDisplay-inputGroup">
                        <label className="ProductDisplay-inputLabel">Rating:</label>
                        <select className="ProductDisplay-select">
                            {ArrayUtils.times(5, key => <option key={++key} value={key}>{key}</option>)}
                        </select>
                    </div>
                </Col>
            </Row>
        </ConfirmModal>, wrapper);
    };

    const handleAddMoreDays = () => alert("5 More days added");

    const renderAdminActions = () => {
        return <div className="ProductDisplay-adminActions">
            You can make it available for <a href="javascript:void(0);" onClick={handleAddMoreDays}>5 more days</a>.
            You can also <a href="javascript:void(0);" onClick={handleEditDetails}>edit</a> details or <a
            href="javascript:void(0);" onClick={handleMakeUnavailable}>make unavailable</a>.
        </div>;
    };

    const isAvailable = () => props.daysLeft > 0;

    return <div className="ProductDisplay-wrapper">
        <div className="ProductDisplay-nav">
            <label>Back</label>
            <label>Category: {props.category}</label>
        </div>
        <Grid className="ProductDisplay-card">
            <Row>
                <Col sm={6} className="ProductDisplay-ratedImage">
                    <img className="ProductDisplay-image"
                         src={props.imageUrl}
                         alt="No Picture found"/>
                    <Rating value={props.rating}/>
                </Col>
                <Col sm={6}>
                    <h2 className="ProductDisplay-name">{props.name}</h2>
                    <div className="ProductDisplay-details">
                        <div className="ProductDisplay-description">
                            {props.description}
                            {props.editMode ? renderAdminActions() : ""}
                        </div>
                        <div className="ProductDisplay-order">
                            <div>
                                <ProductPrice {...props.price}/>
                                {isAvailable() ? "" : renderNotAvailable()}
                                {isAvailable() && props.editMode ? renderDaysLeft(props.daysLeft) : ""}
                            </div>
                            {isAvailable() ? renderOrderButton() : ""}
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
};

ProductDisplay.defaultProps = {
    category: "Thin Crust/Less Calories",
    daysLeft: Math.floor(Math.random() * 2),
    imageUrl: DataUtils.randomImage(),
    rating: DataUtils.randomRating(),
    name: DataUtils.randomName(),
    description: DataUtils.randomDescription(),
    price: {},
    editMode: false,
    categories: {
        pan: 'Pan',
        thickCrust: 'Thick Crust',
        thinCrust: 'Thin Crust',
        vegan: 'Vegan',
        glutenFree: 'Gluten Free'
    },
    sizes: {
        classic: 'Classic',
        large: 'Large',
        xLarge: 'X-Large'
    }
};

export default ProductDisplay;
