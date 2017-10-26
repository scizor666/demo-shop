import React from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import {Grid, Row, Col} from 'react-flexbox-grid';
import ArrayUtils from "../../utils/ArrayUtils";
import Filter from "../filter/Filter";

const ProductList = () => {

    const renderRandomProducts = () => {
        return ArrayUtils.times(
            Math.floor((Math.random() * 50) + 10), i => <Col key={i} sm={6} md={4}><ProductCard/></Col>)
    };

    return <div className="ProductList-wrapper">
        <Filter/>
        <Grid fluid>
            <Row>{renderRandomProducts()}</Row>
        </Grid>
    </div>
};

export default ProductList;