import React from "react";
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import {Link} from 'react-router-dom';
import {setProductModalOpen} from '../../actions';
import {connect} from 'react-redux';

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
            <div className="ProductCard-buttons">
                {props.editMode &&
                <Link to={`/products/${props.id}`} onClick={() => props.setProductModalOpen(true)}>
                    <button className="DemoShop-button">Edit</button>
                </Link>}
                <Link to={`/products/${props.id}`}>
                    <button className="DemoShop-button">Show More</button>
                </Link>
            </div>
        </div>
    </div>;
};


export default connect(null, {setProductModalOpen})(ProductCard);