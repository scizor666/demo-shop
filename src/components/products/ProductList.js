import React, {Component} from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class ProductList extends Component {

    render() {
        return <div className="ProductList-wrapper">
            <Grid fluid>
                <Row>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ProductCard/>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}