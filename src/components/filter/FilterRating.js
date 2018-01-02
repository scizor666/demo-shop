import React from 'react';
import FilterRange from './FilterRange';
import {changeFilter} from '../../actions';
import {connect} from 'react-redux';

const FilterRating = props =>
    <div className="FilterModal-filter FilterRating-wrapper">
        <span className="FilterModal-filterName">Rating:</span>
        <FilterRange {...props} handleChange={newRange => props.changeFilter('rating', newRange)}/>
    </div>;

FilterRating.defaultProps = {
    range: {min: 0, max: 5},
    selected: [1, 3],
};

const mapStateToProps = ({filter: {rating}}) => ({selected: rating});

export default connect(mapStateToProps, {changeFilter})(FilterRating)