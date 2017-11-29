import React, {Component} from 'react';
import './Filter.css'
import FilterSearch from "./FilterSearch";
import FilterModal from "./FilterModal";

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterOpen: false
        };
    }

    triggerFilterModal() {
        this.setState({filterOpen: !this.state.filterOpen});
    }

    render() {
        return <div className="Filter-wrapper">
            <button className="Filter-button" onClick={() => this.triggerFilterModal()}>Filter options</button>
            <FilterSearch/>
            {(() => {
                if (this.state.filterOpen) return <FilterModal/>
            })()}
        </div>
    }
}