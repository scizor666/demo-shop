import React, {Component} from 'react';
import './FilterModal.css'
import FilterRating from "./FilterRating";
import FilterPrice from "./FilterPrice";

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
            <label className="DemoShop-switch">
                <input id="deliverable" type="checkbox" name="deliverable" value={1}/>
                <span className="DemoShop-slider"/>
                <span className="DemoShop-switchLabel">Delivery available</span>
            </label>


            {/*<input id="deliverable" type="checkbox" name="deliverable" value={1}/>*/}
            {/*<label>Delivery available</label>*/}
        </div>;
    }

    renderSizes() {
        return <div>
            Size:
            <div>
            {Object.entries(this.props.sizes)
                .map(([key, name]) => <span key={key}>
                    <input id={`FilterModal-size${key}`} className="FilterModal-sizeRadio" type="radio" name="size" value={key}/>
                    <label htmlFor={`FilterModal-size${key}`} className="FilterModal-sizeLabel">{name}</label>
                </span>)}
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


    render() {
        return <div className="FilterModal-wrapper">
            {this.renderDelivery()}
            {this.renderSizes()}
            {this.renderCategories()}
            <FilterRating/>
            <FilterPrice/>
        </div>
    }

}