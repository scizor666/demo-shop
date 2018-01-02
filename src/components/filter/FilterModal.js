import React from 'react';
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";
import {connect} from 'react-redux';
import {fetchCategories} from "../../actions";

class FilterModal extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderAvailability = () =>
        <div className="FilterModal-filter">
            <span className="FilterModal-filterName">Availability</span>:
            <label className="DemoShop-switch FilterModal-availabilityOption">
                <input id="available" type="checkbox" name="available" value={1}/>
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
                               value={name} defaultChecked={this.props.selectedGender === name}/>
                        <label htmlFor={`FilterModal-gender_${key}`} className="DemoShop-radioLabel">{name}</label>
                    </React.Fragment>)}
            </div>
        </div>;

    renderCategories = () =>
        <div className="FilterModal-filter">
            <span className="FilterModal-filterName">Category:</span>
            <select className="FilterModal-categorySelect">
                {Object.entries(this.props.categories)
                    .map(([key, category]) => <option key={key} value={category.id}>{category.name}</option>)}
            </select>
        </div>;

    render() {
        return <React.Fragment>
            <div className="FilterModal-arrowUp"/>
            <div className="container-fluid FilterModal-wrapper">
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
            </div>
        </React.Fragment>;
    }
}

FilterModal.defaultProps = {
    categories: {
        activeWear: 'Active Wear',
        dresses: 'Dresses',
        jeans: 'Jeans',
        coats: 'Coats'
    },
    genders: {
        man: 'Man',
        woman: 'Woman',
        unisex: 'Unisex'
    },
    selectedGender: 'Unisex'
};

const mapStateToProps = ({categories}) => ({categories: {...categories, '-1': {id: -1, name: 'None'}}});

export default connect(mapStateToProps, {fetchCategories})(FilterModal);