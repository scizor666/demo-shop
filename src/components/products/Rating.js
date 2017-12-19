import React from "react";
import ArrayUtils from "../../utils/ArrayUtils";

const Rating = props =>
    <div className="Rating-wrapper">
        {ArrayUtils.times(props.max, i => {
            const starState = `Rating-star_${i < props.value ? 'full' : 'blank'}`;
            return <i key={i} className={starState}/>;
        })
        }
    </div>;

Rating.defaultProps = {
    value: 5,
    max: 5
};

export default Rating;