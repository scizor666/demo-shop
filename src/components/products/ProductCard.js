import React, {Component} from "react";
import './ProductCard.css';
import Rating from "./Rating";


export default class ProductCard extends Component {

    randomRating() {
        return Math.floor((Math.random() * 5) + 1);
    }

    randomImage() {
        return "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/705f14c8-3abb-40a4-972d-74d657d99f34/c700x420.jpg"
    }

    render() {
        return <div className="ProductCard-wrapper">
            <img className="ProductCard-image"
                src={this.randomImage()}
                alt="No Picture found"/>
            <Rating value={this.randomRating()}/>
        </div>
    }
}
