import React from "react";
import './ProductCard.css';
import Rating from "./Rating";
import DataUtils from "../../utils/DataUtils";
import ProductPrice from "./ProductPrice";

const ProductCard = () => {
    return <div className="ProductCard-wrapper">
        <img className="ProductCard-image"
             src={DataUtils.randomImage()}
             alt="No Picture found"/>
        <Rating value={DataUtils.randomRating()}/>
        <div className="ProductCard-data">
            <div className="ProductCard-title">{DataUtils.randomName()}</div>
            <div className="ProductCard-description">{DataUtils.randomDescription()}</div>
            <div className='ProductCard-price'>
                <ProductPrice />
            </div>
            <button className="ProductCard-button">Show more</button>
        </div>
    </div>;
};

export default ProductCard;