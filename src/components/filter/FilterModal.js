import React from 'react';
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";

const FilterModal = props => {

    const renderAvailability = () =>
        <div>
            <span className="FilterModal-filterName">Availability</span>:
            <label className="DemoShop-switch FilterModal-availabilityOption">
                <input id="available" type="checkbox" name="available" value={1}/>
                <span className="DemoShop-slider"/>
                <span className="DemoShop-switchLabel">Available only</span>
            </label>
        </div>;

    const renderGenders = () =>
        <div>
            <span className="FilterModal-filterName">Gender:</span>
            <div className="DemoShop-radioOptionWrapper">
                {Object.entries(props.genders)
                    .map(([key, name]) => <span key={key}>
                        <input id={`FilterModal-gender_${key}`} className="DemoShop-radioInput" type="radio" name="gender"
                               value={key} defaultChecked={props.selectedGender === name}/>
                        <label htmlFor={`FilterModal-gender_${key}`} className="DemoShop-radioLabel">{name}</label>
                    </span>)}
            </div>
        </div>;

    const renderCategories = () =>
        <div>
            <span className="FilterModal-filterName">Category:</span>
            <select className="FilterModal-categorySelect">
                {Object.entries(props.categories)
                    .map(([key, label]) => <option key={key} value={key}>{label}</option>)}
            </select>
        </div>;

    return <div>
        <div className="FilterModal-arrowUp"/>
        <div className="container-fluid FilterModal-wrapper">
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    {renderAvailability()}
                </div>
                <div className="col-xs-12 col-sm-4">
                    {renderGenders()}
                </div>
                <div className="col-xs-12 col-sm-4">
                    {renderCategories()}
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
    </div>;
};

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

export default FilterModal;