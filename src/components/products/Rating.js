import React, {Component} from "react";
import './Rating.css';
import ArrayUtils from "../../utils/ArrayUtils";

export default class Rating extends Component {

    static defaultProps = {
        value: 5,
        max: 5
    };


    render() {
        return <div className="Rating-wrapper">
            {ArrayUtils.times(this.props.max, i => {
                    const starState = `Rating-star_${i < this.props.value ? 'full' : 'blank'}`;
                    return <i key={i} className={`fa fa-star Rating-star ${starState}`} aria-hidden="true"/>;
                })
            }
        </div>;
    }
}