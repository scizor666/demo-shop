import React, {Component} from 'react';
import './FilterPrice.css'
import {Range}  from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class FilterPrice extends Component {

    static defaultProps = {
        range: {min: 0, max:1000},
        start: [300, 600],
    };

    constructor(props) {
        super(props);
        this.state = {
            marks: this.props.start.reduce((map, i) => {
                map[i] = i;
                return map;
            }, {})
        };
        console.log(this.state.marks);
    }

    render() {
        return <div className="FilterRating-wrapper">
            Price:
            <Range marks={this.state.marks} min={this.props.range.min} max={this.props.range.max} defaultValue={this.props.start}/>
        </div>
    }
}