import React, {Component} from 'react';
import './FilterSearch.css'

export default class FilterSearch extends Component {

    static defaultProps = {
      placeHolder: 'Filter by text...'
    };

    render() {
        return <div className="FilterSearch-fieldGroup">
            <input className="FilterSearch-field" placeholder={this.props.placeHolder}/>
            <span className="fa fa-search FilterSearch-icon"/>
        </div>
    }
}