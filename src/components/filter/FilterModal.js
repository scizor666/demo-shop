import React from 'react';
import './FilterModal.css'
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";
import {Grid, Row, Col} from 'react-flexbox-grid';

const FilterModal = props => {

    const renderDelivery = () =>
        <div>
            Delivery:
            <label className="DemoShop-switch FilterModal-deliveryOption">
                <input id="deliverable" type="checkbox" name="deliverable" value={1}/>
                <span className="DemoShop-slider"/>
                <span className="DemoShop-switchLabel">Delivery available</span>
            </label>
        </div>;

    const renderSizes = () =>
        <div className="FilterModal-sizeWrapper">
            Size:
            <div className="DemoShop-radioOptionWrapper">
                {Object.entries(props.sizes)
                    .map(([key, name]) => <label key={key}>
                        <input id={`FilterModal-size${key}`} className="DemoShop-radioInput" type="radio" name="size"
                               value={key}/>
                        <label htmlFor={`FilterModal-size${key}`} className="DemoShop-radioLabel">{name}</label>
                    </label>)}
            </div>
        </div>;

    const renderCategories = () =>
        <div>
            Category:
            <select className="FilterModal-categorySelect">
                {Object.entries(props.categories)
                    .map(([key, label]) => <option key={key} value={key}>{label}</option>)}
            </select>
        </div>;

    return <div>
        <div className="FilterModal-arrowUp"/>
        <Grid fluid className="FilterModal-wrapper">
            <Row>
                <Col xs={12} sm={3.75}>
                    {renderDelivery()}
                </Col>
                <Col xs={12} sm={4.5}>
                    {renderSizes()}
                </Col>
                <Col xs={12} sm={3.75}>
                    {renderCategories()}
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4}>
                    <FilterRating/>
                </Col>
                <Col xs={12} sm={8}>
                    <FilterPrice/>
                </Col>
            </Row>
        </Grid>
    </div>;
};

FilterModal.defaultProps = {
    categories: {
        pan: 'Pan',
        thickCrust: 'Thick Crust',
        thinCrust: 'Thin Crust',
        vegan: 'Vegan',
        glutenFree: 'Gluten Free'
    },
    sizes: {
        classic: 'Classic',
        large: 'Large',
        xLarge: 'X-Large'
    }
};

export default FilterModal;