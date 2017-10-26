import React from 'react';
import DataUtils from "../../utils/DataUtils";
import './ProductPrice.css';

const ProductPrice = props =>
    <span className="ProductPrice-wrapper">
        <span className="ProductPrice-currency">{props.currency}</span>
        {DataUtils.randomPrice()}
    </span>;

export default ProductPrice;