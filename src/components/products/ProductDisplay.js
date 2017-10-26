import React from "react";
import './ProductDisplay.css';
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import DataUtils from "../../utils/DataUtils";
import {Col, Grid, Row} from "react-flexbox-grid";
import ArrayUtils from "../../utils/ArrayUtils";

const ProductDisplay = props => {

    const renderSoldOut = () => <b> (<span className="ProductDisplay-soldOutLabel">sold out</span>)</b>;

    const renderBuyButton = () => <button className="DemoShop-button">Buy</button>;

    return <div className="ProductDisplay-wrapper">
        <div className="ProductDisplay-nav">
            <label>Back</label>
            <label>Category: {props.category}</label>
        </div>
        <Grid className="ProductDisplay-card">
            <Row>
                <Col sm={6} className="ProductDisplay-ratedImage">
                    <img className="ProductDisplay-image"
                         src={DataUtils.randomImage()}
                         alt="No Picture found"/>
                    <Rating value={DataUtils.randomRating()}/>
                </Col>
                <Col sm={6}>
                    <h2 className="ProductDisplay-name">{DataUtils.randomName()}</h2>
                    <div className="ProductDisplay-details">
                        <div className="ProductDisplay-description">
                            {DataUtils.randomDescription()}
                        </div>
                        <div className="ProductDisplay-buy">
                            <div>
                                <ProductPrice />
                                {props.isAvailable ? "" : renderSoldOut()}
                            </div>
                            {props.isAvailable ? renderBuyButton() : ""}
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
};

ProductDisplay.defaultProps = {
    category: "Thin Crust/Less Calories",
    isAvailable: ArrayUtils.randomItem([true, false])
};

export default ProductDisplay;
