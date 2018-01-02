import React from 'react';
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";
import {connect} from 'react-redux';
import {fetchCategories, fetchProducts, resetFilter, changeFilter} from "../../actions";

class FilterModal extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleInputChange = e =>
        this.props.changeFilter(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchProducts();
    };

    handleReset = () => this.props.resetFilter();

    renderAvailability = () =>
        <div className="FilterModal-filter">
            <span className="FilterModal-filterName">Availability</span>:
            <label className="DemoShop-switch FilterModal-availabilityOption">
                <input id="available"
                       type="checkbox"
                       name="available"
                       checked={this.props.available}
                       onChange={this.handleInputChange}
                />
                <span className="DemoShop-slider"/>
                <span className="DemoShop-switchLabel">Available only</span>
            </label>
        </div>;

    renderGenders = () =>
        <div className="FilterModal-filter">
            <span className="FilterModal-filterName">Gender:</span>
            <div className="DemoShop-radioOptionWrapper">
                {Object.entries(this.props.genders)
                    .map(([key, name]) => <React.Fragment key={key}>
                        <input id={`FilterModal-gender_${key}`} className="DemoShop-radioInput" type="radio"
                               name="gender"
                               value={name} checked={this.props.gender === name}
                               onChange={this.handleInputChange}
                        />
                        <label htmlFor={`FilterModal-gender_${key}`} className="DemoShop-radioLabel">{name}</label>
                    </React.Fragment>)}
            </div>
        </div>;

    renderCategories = () =>
        <div className="FilterModal-filter">
            <span className="FilterModal-filterName">Category:</span>
            <select name='category' value={this.props.category.id}
                    className="FilterModal-categorySelect"
                    onChange={this.handleInputChange}>
                {Object.entries(this.props.categories)
                    .map(([key, category]) => <option key={key} value={category.id}>{category.name}</option>)}
            </select>
        </div>;

    render() {
        return <React.Fragment>
            <div className="FilterModal-arrowUp"/>
            <form className="container-fluid FilterModal-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        {this.renderAvailability()}
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        {this.renderGenders()}
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        {this.renderCategories()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <FilterRating/>
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <FilterPrice/>
                    </div>
                </div>
                <div className="row FilterModal-buttons">
                    <button type="submit" className="DemoShop-button" onClick={this.handleSubmit}>Apply</button>
                    <button type="button" className="DemoShop-button_secondary" onClick={this.handleReset}>Cancel
                    </button>
                </div>
            </form>
        </React.Fragment>;
    }
}

FilterModal.defaultProps = {
    genders: {
        man: 'Man',
        woman: 'Woman',
        unisex: 'Unisex'
    },
    gender: 'Unisex',
    available: false,
    category: {id: -1, name: 'None'}
};

const mapStateToProps = ({categories, filter}) => {
    return {
        categories: {...categories, [FilterModal.defaultProps.category.id]: FilterModal.defaultProps.category},
        ...filter
    }
};

export default connect(mapStateToProps, {
    changeFilter,
    resetFilter,
    fetchCategories,
    fetchProducts
})(FilterModal);