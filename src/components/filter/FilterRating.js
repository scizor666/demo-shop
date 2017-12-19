import React from 'react';
import FilterRange from "./FilterRange";

const FilterRating = props =>
    <div className="FilterRating-wrapper">
        <span className="FilterModal-filterName">Rating:</span>
        <FilterRange {...props}/>
    </div>;

FilterRating.defaultProps = {
    range: {min: 0, max: 5},
    start: [1, 3],
};

export default FilterRating;