import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, changeFilter} from "../../actions";
import _ from 'lodash';

class FilterSearch extends React.Component {

    constructor(props) {
        super(props);
        this.fetchProducts = _.debounce(this.props.fetchProducts, 300);
    }

    handleUserInput = e => {
        this.props.changeFilter(e.target.name, e.target.value);
        this.fetchProducts({[e.target.name]: e.target.value, replace: true});
    };

    render() {
        return <div className="FilterSearch-fieldGroup">
            <input className="FilterSearch-field"
                   name="query"
                   placeholder={this.props.placeHolder}
                   onChange={this.handleUserInput}
                   value={this.props.query}
            />
        </div>;
    }
}

FilterSearch.defaultProps = {
    placeHolder: 'Filter by text...',
    query: ''
};

const mapStateToProps = ({filter: {query}}) => ({query});

export default connect(mapStateToProps, {fetchProducts, changeFilter})(FilterSearch);