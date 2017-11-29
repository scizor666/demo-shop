import React from 'react';
import './FilterSearch.css'

const FilterSearch = props =>
    <div className="FilterSearch-fieldGroup">
        <input className="FilterSearch-field" placeholder={props.placeHolder}/>
    </div>;

FilterSearch.defaultProps = {
    placeHolder: 'Filter by text...'
};

export default FilterSearch;