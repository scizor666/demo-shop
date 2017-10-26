import React from "react";
import './ProductDisplay.css';
import Rating from "./Rating";
import DataUtils from "../../utils/DataUtils";
import {Col, Grid, Row} from "react-flexbox-grid";
import ArrayUtils from "../../utils/ArrayUtils";

const ProductDisplay = props => {

    const isAvailable = () => {
        return ArrayUtils.randomItem([true, false])
    };

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
                    <div className="ProductDisplay-description">
                        {DataUtils.randomDescription()}
                    </div>
                    <div className="ProductDisplay-buyBlock">

                        {isAvailable() ? "available" : "not avilable"}
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
};

ProductDisplay.defaultProps = {
    category: "Man/Active Wear"
};

export default ProductDisplay;
