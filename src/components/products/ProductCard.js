import React from "react";
import './ProductCard.css';
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import DataUtils from "../../utils/DataUtils";

const ProductCard = props => {
    return <div className="ProductCard-wrapper">
        <img className="ProductCard-image"
             src={props.imageUrl}
             alt="No Picture found"/>
        <Rating value={props.rating}/>
        <div className="ProductCard-data">
            <div className="ProductCard-title">{props.name}</div>
            <div className="ProductCard-description">{props.description}</div>
            <div className='ProductCard-price'>
                <ProductPrice {...props.price}/>
            </div>
            <button className="ProductCard-button">Show more</button>
        </div>
    </div>;
};

ProductCard.defaultProps = {
    imageUrl: DataUtils.randomImage(),
    rating: DataUtils.randomRating(),
    name: DataUtils.randomName(),
    description: DataUtils.randomDescription(),
    price: {}
};


export default ProductCard;