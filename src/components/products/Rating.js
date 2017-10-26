import React from "react";
import './Rating.css';
import ArrayUtils from "../../utils/ArrayUtils";

const Rating = props =>
    <div className="Rating-wrapper">
        {ArrayUtils.times(props.max, i => {
            const starState = `Rating-star_${i < props.value ? 'full' : 'blank'}`;
            return <i key={i} className={`fa fa-star Rating-star ${starState}`} aria-hidden="true"/>;
        })
        }
    </div>;

Rating.defaultProps = {
    value: 5,
    max: 5
};

export default Rating;