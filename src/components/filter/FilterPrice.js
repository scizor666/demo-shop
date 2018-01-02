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
    selected: [300, 600],
    step: 50,
};

const mapStateToProps = ({filter: {price}}) => ({selected: price});

export default connect(mapStateToProps, {changeFilter})(FilterPrice);