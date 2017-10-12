import React, {Component} from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import {Grid, Row, Col} from 'react-flexbox-grid';
import ArrayUtils from "../../utils/ArrayUtils";
import Filter from "../filter/Filter";

export default class ProductList extends Component {

    renderRandomProducts() {
        return ArrayUtils.times(
            Math.floor((Math.random() * 50) + 10), i => <Col key={i} sm={6} md={4}><ProductCard/></Col>)
    }

    render() {
        return <div className="ProductList-wrapper">
            <Filter/>
            <Grid fluid>
                <Row>{this.renderRandomProducts()}</Row>
            </Grid>
        </div>
    }
}