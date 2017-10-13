import React, {Component} from 'react';
import './FilterRating.css'
import FilterRange from "./FilterRange";

export default class FilterRating extends Component {

    static defaultProps = {
        range: {min: 0, max: 5},
        start: [1, 3],
    };

    render() {
        return <div className="FilterRating-wrapper">
            Rating:
            <FilterRange {...this.props}/>
        </div>
    }
}