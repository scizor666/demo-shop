import React, {Component} from 'react';
import './FilterModal.css'
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class FilterModal extends Component {

    static defaultProps = {
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

    renderDelivery() {
        return <div>
            Delivery:
            <label className="DemoShop-switch FilterModal-deliveryOption">
                <input id="deliverable" type="checkbox" name="deliverable" value={1}/>
                <span className="DemoShop-slider"/>
                <span className="DemoShop-switchLabel">Delivery available</span>
            </label>
        </div>;
    }

    renderSizes() {
        return <div className="FilterModal-sizeWrapper">
            Size:
            <div className="FilterModal-sizeOptions">
                {Object.entries(this.props.sizes)
                    .map(([key, name]) => <label key={key}>
                    <input id={`FilterModal-size${key}`} className="FilterModal-sizeRadio" type="radio" name="size"
                           value={key}/>
                    <label htmlFor={`FilterModal-size${key}`} className="FilterModal-sizeLabel">{name}</label>
                </label>)}
            </div>
        </div>
    }

    renderCategories() {
        return <div>
            Category:
            <select className="FilterModal-categorySelect">
                {Object.entries(this.props.categories)
                    .map(([key, label]) => <option key={key} value={key}>{label}</option>)}
            </select>
        </div>
    }

    //TODO fix it
    render() {
        return <Grid fluid className="FilterModal-wrapper">
            <Row>
                <Col style={{flex: 1}}>
                    {this.renderDelivery()}
                </Col>
                <Col style={{flex: 1}}>
                    {this.renderSizes()}
                </Col>
                <Col style={{flex: 1}}>
                    {this.renderCategories()}
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FilterRating/>
                </Col>
                <Col xs={6}>
                    <FilterPrice/>
                </Col>
            </Row>
        </Grid>
    }

}