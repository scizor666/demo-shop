import React, {Component} from 'react';
import './FilterPrice.css'
import FilterRange from "./FilterRange";

export default class FilterPrice extends Component {

    static defaultProps = {
        range: {min: 0, max:1000},
        start: [300, 600],
    };

    render() {
        return <div className="FilterRating-wrapper">
            Price:
            <FilterRange {...this.props}/>
        </div>
    }
}