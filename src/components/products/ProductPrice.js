import React from 'react';
import DataUtils from "../../utils/DataUtils";

const ProductPrice = props =>
    <span className="ProductPrice-wrapper">
        <span className="ProductPrice-currency">{props.currency}</span>
        {props.value}
    </span>;

ProductPrice.defaultProps = {
    currency: '$',
    value: DataUtils.randomPrice()
};

export default ProductPrice;