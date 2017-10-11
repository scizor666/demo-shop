import React, {Component} from "react";
import './ProductCard.css';
import Rating from "./Rating";
import ArrayUtils from "../../utils/ArrayUtils";


export default class ProductCard extends Component {

    static defaultProps = {
        currency: '$'
    };

    randomRating() {
        return Math.floor((Math.random() * 5) + 1);
    }

    randomImage() {
        const options = [
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/ff5aced0-f78d-478f-bb53-1aed680da5f9/6f2db64af78a9f2a338985524acc7669.jpeg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/96ba7bbc-d0ad-406f-9843-bc5abbd3e557/images.jpeg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/ce0bcd9b-fc47-4859-a024-1427a557f726/Supreme_pizza.jpg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/705f14c8-3abb-40a4-972d-74d657d99f34/c700x420.jpg"
        ];
        return ArrayUtils.randomItem(options)
    }

    randomPrice() {
        return (Math.random() * 100).toFixed(2)
    }

    randomDescription() {
        const options = [
            "Пепперони, ветчина, шампиньоны, моцарелла и пармезан",
            "Бекон, пармезан, моцарелла, сливочный соус",
            "Курица, ананасы, соус сливочный, моцарелла",
            "Свинина, курица, пепперони, ветчина, бекон, помидоры",
            // "Пепперони, ветчина, шампиньоны, моцарелла и пармезан as dasd asd asd asd asd asd asdjhasdjhashgjdasd as das das das das das das das das das das das das das das dasd asd asf sdg dfh fgj se fe f wet eryergerf wef werf wefw efe ryrt hrtherge rge"
        ];
        return ArrayUtils.randomItem(options);
    }

    randomName() {
        const options = [
            "Пицца Деревенская",
            "Пицца Классика",
            "Пицца Карбонара",
            "Пицца Гавайская"
        ];
        return ArrayUtils.randomItem(options);
    }

    render() {
        return <div className="ProductCard-wrapper">
            <img className="ProductCard-image"
                 src={this.randomImage()}
                 alt="No Picture found"/>
            <Rating value={this.randomRating()}/>
            <div className="ProductCard-data">
                <div className="ProductCard-title">{this.randomName()}</div>
                <div className="ProductCard-description">{this.randomDescription()}</div>
                <span className="ProductCard-price">
                    <span className="ProductCard-currency">{this.props.currency}</span>
                    {this.randomPrice()}
                </span>
                <button className="ProductCard-button">Show more</button>
            </div>
        </div>
    }
}