import React from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import ArrayUtils from "../../utils/ArrayUtils";
import Filter from "../filter/Filter";
import DataUtils from "../../utils/DataUtils";

const ProductList = props => {

    const renderProducts = products => products.map((product, i) =>
        <div className="ProductList-item col-xs-12 col-sm-6 col-md-4" key={i} ><ProductCard {...product}/>
        </div>
    );

    return <div className="ProductList-wrapper">
        <Filter/>
        <div className="container-fluid">
            <div className="row">{renderProducts(props.products)}</div>
        </div>
    </div>
};

ProductList.defaultProps = {
    products: ArrayUtils.times(Math.floor((Math.random() * 50) + 10), () => {
            return {
                name: DataUtils.randomName(),
                imageUrl: DataUtils.randomImage(),
                description: DataUtils.randomDescription(),
                rating: DataUtils.randomRating(),
                price: {value: DataUtils.randomPrice()}
            }
        }
    )
};

export default ProductList;