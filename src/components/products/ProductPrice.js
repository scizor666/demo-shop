import React from 'react';

const ProductPrice = props =>
    <span className="ProductPrice-wrapper">
        <span className="ProductPrice-currency">{props.currency}</span>
        {props.value}
    </span>;

ProductPrice.defaultProps = {
    currency: '$',
};

export default ProductPrice;