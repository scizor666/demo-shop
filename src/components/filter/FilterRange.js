import React from 'react';
import {Range} from 'rc-slider';

const FilterRange = props => {

    const rangeToMarks = marksRange => {
        return marksRange.reduce((map, i) => {
            map[i] = i.toString();
            return map;
        }, {})
    };

    return <div className="DemoShop-rangeWrapper">
        <Range marks={rangeToMarks(props.selected)}
               min={props.range.min}
               max={props.range.max}
               step={props.step}
               value={props.selected}
               onChange={newRange => props.handleChange(newRange)}
        />
    </div>;
};

export default FilterRange;