import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, changeSearchText} from "../../actions";
import _ from 'lodash';

class FilterSearch extends React.Component {

    constructor(props) {
        super(props);
        this.fetchProducts = _.debounce(this.props.fetchProducts, 300);
    }

    handleUserInput = e => {
        this.props.changeSearchText(e.target.value);
        this.fetchProducts({...this.props.filter, query: e.target.value, replace: true});
    };

    render = () => <div className="FilterSearch-fieldGroup">
        <input className="FilterSearch-field"
               placeholder={this.props.placeHolder}
               onChange={this.handleUserInput}
               value={this.props.query}
        />
    </div>;
}

FilterSearch.defaultProps = {
    placeHolder: 'Filter by text...',
};

const mapStateToProps = ({filter, query}) => ({filter, query});

export default connect(mapStateToProps, {fetchProducts, changeSearchText})(FilterSearch);