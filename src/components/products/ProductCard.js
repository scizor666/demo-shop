import React from "react";
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import {Link} from 'react-router-dom';

const ProductCard = props => {
    return <div className="ProductCard-wrapper">
        <div className={"ProductCard-imageContainer"}>
            <img className="ProductCard-image"
                 src={props.image}
                 alt="No Picture found"/>
            <Rating value={props.rating}/>
        </div>
        <div className="ProductCard-data">
            <div className="ProductCard-title">{props.name}</div>
            <div className="ProductCard-description">{props.description}</div>
            <div className='ProductCard-price'>
                <ProductPrice value={props.cost}/>
            </div>
            <Link to={`/products/${props.id}`}>
                <button className="ProductCard-button">Show More</button>
            </Link>
        </div>
    </div>;
};


export default ProductCard;