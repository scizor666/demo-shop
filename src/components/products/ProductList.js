import React, {Component} from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class ProductList extends Component {

    renderRandomProducts() {
        return Array.apply(null, new Array(Math.floor((Math.random() * 50) + 10)))
                .map((_, i) => {
                    return <Col key={i} sm={6} md={4}>
                        <ProductCard/>
                    </Col>;
                })

    }

    render() {
        return <div className="ProductList-wrapper">
            <Grid fluid>
                <Row>{this.renderRandomProducts()}</Row>
            </Grid>
        </div>
    }
}