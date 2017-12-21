import React from 'react';
import FilterRange from "./FilterRange";

const FilterPrice = props =>
    <div className="FilterModal-filter FilterPrice-wrapper">
        <span className="FilterModal-filterName">Price:</span>
        <FilterRange {...props}/>
    </div>;

FilterPrice.defaultProps = {
    range: {min: 0, max: 1000},
    start: [300, 600],
};

export default FilterPrice;