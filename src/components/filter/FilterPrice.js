import React from 'react';
import FilterRange from "./FilterRange";
import {connect} from 'react-redux';
import {changeFilter} from '../../actions';

const FilterPrice = props =>
    <div className="FilterModal-filter FilterPrice-wrapper">
        <span className="FilterModal-filterName">Price:</span>
        <FilterRange {...props} handleChange={newRange => props.changeFilter('price', newRange)}/>
    </div>;

FilterPrice.defaultProps = {
    range: {min: 0, max: 1000},
    step: 50,
};

export default connect(null, {changeFilter})(FilterPrice);