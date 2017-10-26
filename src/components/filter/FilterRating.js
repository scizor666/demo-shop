import React from 'react';
import './FilterRating.css'
import FilterRange from "./FilterRange";

const FilterRating = props =>
    <div className="FilterRating-wrapper">
        Rating:
        <FilterRange {...props}/>
    </div>;

FilterRating.defaultProps = {
    range: {min: 0, max: 5},
    start: [1, 3],
};

export default FilterRating;