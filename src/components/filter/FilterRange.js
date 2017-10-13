import React, {Component} from 'react';
import './FilterRange.css'
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class FilterRange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marks: this.rangeToMarks(props.start)
        };
    }

    rangeToMarks(marksRange) {
        return marksRange.reduce((map, i) => {
            map[i] = i;
            return map;
        }, {})
    }

    handleChange(newRange) {
        this.setState({marks: this.rangeToMarks(newRange)})
    }

    render() {
        return <div className="FilterRating-wrapper">
            <Range marks={this.state.marks} min={this.props.range.min} max={this.props.range.max}
                   defaultValue={this.props.start} onChange={e => this.handleChange(e)}/>
        </div>
    }
}