import React, {Component} from 'react';
import {Range} from 'rc-slider';

export default class FilterRange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marks: this.rangeToMarks(props.start)
        };
    }

    rangeToMarks(marksRange) {
        return marksRange.reduce((map, i) => {
            map[i] = i.toString();
            return map;
        }, {})
    }

    handleChange(newRange) {
        this.setState({marks: this.rangeToMarks(newRange)})
    }

    render() {
        return <div className="DemoShop-rangeWrapper">
            <Range marks={this.state.marks}
                   min={this.props.range.min}
                   max={this.props.range.max}
                   step={this.props.step}
                   defaultValue={this.props.start}
                   onChange={e => this.handleChange(e)}
            />
        </div>
    }
}

FilterRange.defaultProps = {
    step: 1
};