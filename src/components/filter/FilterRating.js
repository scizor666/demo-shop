import React, {Component} from 'react';
import './FilterRating.css'
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class FilterRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marks: this.props.start.reduce((map, i) => {
                map[i] = i;
                return map;
            }, {})
        };
    }

    static defaultProps = {
        range: {min: 0, max: 5},
        start: [1, 3],
    };

    render() {
        return <div className="FilterRating-wrapper">
            Rating:
            <Range marks={this.state.marks} min={this.props.range.min} max={this.props.range.max}
                   defaultValue={this.props.start}/>
        </div>
    }
}